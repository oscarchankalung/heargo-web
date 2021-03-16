import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Card,
  Col, 
  Container, 
  Row,
  Button,
  Form,
  Alert,
  Image
 } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import * as request from "../../../api/booking";
import stripeLogo from "../../../assets/images/booking/stripe.png"

export const BookingPayment = ({ confirmPayment }) => {
  const { t } = useTranslation()
  const [ alertShow, setAlertShow ] = useState(false)

  const schema = yup.object().shape({
    paymentMethod: yup.string().required()
  })

  const { register, control, handleSubmit, errors, reset } = useForm({resolver: yupResolver(schema)})

  return (
      <div className="booking-payment"> 
        <Form onSubmit={handleSubmit(confirmPayment)}>
          <Container className="booking-payment-form">
            <Row>
              <Col>
                <Alert show={alertShow} variant="danger" onClose={() => setAlertShow(false)} dismissible>
                  <p>{t("booking.step03.alert_message")}</p>
                </Alert>
              </Col>
            </Row>
            <Row>
              <Col>            
                <Form.Group controlId="statement1" className="float-left">
                  <Form.Check 
                    type="radio" 
                    name="paymentMethod"
                    value="stripe"
                    label={t("booking.step05.stripe")}
                    ref={register} />
                    <Form.Text className="float-left">{t("booking.step05.stripe_description")}</Form.Text>
                    { <Form.Text className="float-left">{errors.statement1?.message}</Form.Text> }
                </Form.Group>     
                <Image src={stripeLogo} className="payment-logo"/>
              </Col>
            </Row>
            <Row>
              <Col>  
                <Form.Group controlId="statement2" className="float-left">
                  <Form.Check 
                    type="radio" 
                    name="paymentMethod"
                    value="other"
                    label={t("booking.step05.other")}
                    ref={register} />
                    <Form.Text className="float-left">{t("booking.step05.other_description")}</Form.Text>
                    { <Form.Text className="float-left">{errors.statement2?.message}</Form.Text> }
                </Form.Group>
              </Col>
            </Row>
          </Container>

          <Button type="submit" variant="primary" className="btn-round" >
          {t("booking.btn_cont")}
          </Button>
        </Form>
      </div>
  );
};
