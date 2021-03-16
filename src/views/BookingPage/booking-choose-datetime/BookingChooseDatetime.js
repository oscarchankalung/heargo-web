import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Col, 
  Container, 
  Row,
  Button,
  ListGroup
} from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import * as request from "../../../api/booking";

export const BookingChooseDatetime = ({
    selectedService,
    selectedDuration,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    nextStep
}) => {
  const { t } = useTranslation()
  const [availableTime, setAvailableTime] = useState([])

  useEffect(() => {
    let serviceList = []
    selectedService.map((item) => {
      serviceList.push(item.id)
    })
    const service = "["+serviceList.toString()+"]"
    const date = moment(selectedDate).format("YYYY-MM-DD")
    request.fetchAvailableTime(service, date)
    .then(({data}) => {
      setAvailableTime(data)
      setSelectedTime(0)
    })
    .catch((err) => console.log(err))
  }, [selectedService, selectedDate, setSelectedTime])


  return (
    <>
      <Container className="datetime">
        <Row>
          <Col>
            <ReactDatePicker
              select={selectedDate}
              onChange={date => setSelectedDate(date)}
              inline
            />
          </Col>
          <Col>
            <div className="booking-info">
              <span className="date">{moment(selectedDate).format("YYYY-MM-DD, dddd")}</span>
              <span className="duration">{t("booking.step02.duration")} {selectedDuration} {t('booking.step02.minute')}</span>
              <ListGroup className="mt-3">
                {availableTime.map(time => {
                  return (
                    <ListGroup.Item 
                      className={time === selectedTime && "active"}
                      key={time} 
                      action 
                      onClick={() => setSelectedTime(time)}>
                      {time}:00
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
      <Button className="mt-5" 
      onClick={()=> {
        if (selectedTime && selectedDate)
        nextStep(2)
      }}>
        {t("booking.btn_cont")}
      </Button>
    </>
  );
};
