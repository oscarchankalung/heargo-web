import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Col, 
  Container, 
  Row,
  Button,
  Form
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import moment from "moment";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const BookingConfirm = ({
  selectedService,
  selectedDuration,
  selectedDate,
  selectedTime,
  bookingInfo,
  confirmBooking
}) => {
  const { t } = useTranslation()
  let totalPrice = 0

  const schema = yup.object().shape({
    remark: yup.string(),
    agree_service: yup.bool().oneOf([true], t("booking.step04.alert_message")),
    statement1: yup.bool().oneOf([true], t("booking.step04.alert_message")),
    statement2: yup.bool().oneOf([true], t("booking.step04.alert_message"))
  })

  selectedService.map((item, i) => {
    totalPrice += parseInt(item.price)
  })

  const { register, control, handleSubmit, errors, reset } = useForm({ resolver: yupResolver(schema)})


  return (
    <div>
    <Form onSubmit={handleSubmit(confirmBooking)}>
      <Container className="booking-confirm">
        <Row>
          <Col>
            <div className="info-group">
              <h5>{t("booking.step04.personal_info")}</h5>
              <span>{bookingInfo.firstname} {bookingInfo.lastname}</span>
              <span>+852 {bookingInfo.phone}</span>
            </div>
            <div className="info-group">
              <h5>{t("booking.step04.address")}</h5>
              <p>        
                {bookingInfo.room}, {bookingInfo.floor}, {bookingInfo.block}<br />
                {bookingInfo.house}<br />
                {bookingInfo.district}<br />
                {bookingInfo.zone}<br />
              </p>
            </div>
          </Col>
          <Col>
            <div className="info-group">
              <h5>{t("booking.step04.datetime")}</h5>
              <span> {moment(selectedDate).format("YYYY-MM-DD")} {selectedTime}:00</span>
            </div>
            <div className="info-group">
              <h5>{t("booking.step04.services")}</h5>
              {selectedService.map((item, i) => {
                return (
                  <div key={i}>
                    <span className="service-title">{item.title_en}</span>
                    <span className="service-price">$ {item.price}</span>
                  </div>
                )
              })}
              <hr />
              <span className="service-title">
                {t("booking.step04.total")}{selectedDuration}{t("booking.step04.min_of_service")}
              </span>
              <span className="service-price">$ {totalPrice}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
              <Form.Group controlId="remark">
              <Form.Control 
              as="textarea" 
              name="remark"
              row={3}
              placeholder={t("booking.step04.remark")} 
              ref={register} />
              { <Form.Text className="float-left">{errors.remark?.message}</Form.Text> }
              </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>            
            <Form.Group controlId="agree_service" className="float-left">
              <Form.Check 
                type="checkbox" 
                name="agree_service"
                label={t("booking.step04.agree_service")}
                ref={register} />
                { <Form.Text className="float-left">{errors.agree_service?.message}</Form.Text> }
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>            
            <Form.Group controlId="statement1" className="float-left">
              <Form.Check 
                type="checkbox" 
                name="statement1"
                label={t("booking.step04.statement1")}
                ref={register} />
                { <Form.Text className="float-left">{errors.statement1?.message}</Form.Text> }
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>            
            <Form.Group controlId="statement2" className="float-left">
              <Form.Check 
                type="checkbox" 
                name="statement2"
                label={t("booking.step04.statement2")}
                ref={register} />
                { <Form.Text className="float-left">{errors.statement2?.message}</Form.Text> }
            </Form.Group>
          </Col>
        </Row>
      </Container>

      <Button type="submit" variant="primary" className="btn-round" >
        {t("booking.confirm_booking")}
        </Button>
    </Form>
    </div>
  );
};
