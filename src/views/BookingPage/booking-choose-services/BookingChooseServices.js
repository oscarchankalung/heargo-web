import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Card,
  Col, 
  Container, 
  Row,
  Button
 } from "react-bootstrap";
import * as request from "../../../api/booking";
import step01Image from "../../../assets/images/booking/web-steps1.1.jpg"
import step02Image from "../../../assets/images/booking/web-steps1.2.jpg"
import step03Image from "../../../assets/images/booking/web-steps1.3.jpg"
import step04Image from "../../../assets/images/booking/web-steps1.1.jpg"
import step05Image from "../../../assets/images/booking/web-steps1.1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const BookingChooseServices = ({
  selectedService,
  setSelectedService,
  setSelectedDuration,
  nextStep
}) => {
  const { t } = useTranslation()
  const [ services, setServices ] = useState([])
  const image = [
    step01Image,
    step02Image,
    step03Image,
    step04Image,
    step05Image
  ]

  useEffect(() => {
    request.fetchServices()
    .then(({data}) => {
      setServices(data)
    })
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    let duration = 0
    selectedService.map((item) => {
      duration += item.duration
    })
    setSelectedDuration(duration)
  }, [services, selectedService, setSelectedDuration])

  const servicesClicked = async (item) => {
    if ( selectedService.indexOf(item) > -1){
      await setSelectedService(selectedService.filter(i => (i !== item)))
    }else{
      await setSelectedService([...selectedService, item])
    }
  }

  return (
    <Container>
      <Row>
          {services && services.map((item, i) => {
            const selected = selectedService.indexOf(item) > -1
            return (
              <Col sm={4} key={i}>
                <Card className={`my-5 ${selected && "active"}`} onClick={()=> servicesClicked(item)}>
                    <span className={`selected-icon ${selected && "active"}`}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <Card.Img src={image[i]}/>
                    <Card.Body>
                        <Card.Title>
                          <span className="subtitle">{t("booking.step01.subtitle")}</span>
                          {item.title_en}
                        </Card.Title>
                        <Card.Text>
                          <span className="price">${item.price} / {item.duration} {t("booking.step01.minute")}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
            )
          })}
      </Row>
      <Row>
        <Col>
          <Button onClick={()=> {
            if (selectedService.length > 0){
              nextStep(1)}
            }}>
            {t("booking.btn_cont")}</Button>
        </Col>
      </Row>
    </Container>
  );
};
