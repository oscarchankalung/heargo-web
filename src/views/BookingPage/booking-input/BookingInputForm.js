import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Col, 
  Container, 
  Row,
  Button,
  Form,
  Alert
} from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const BookingInputForm = ({ 
    alertShow, 
    setAlertShow, 
    bookingInfo,
    submit 
}) => {
  const { t } = useTranslation()

  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    dob: yup.date().required(),
    gender: yup.string().required(),
    room: yup.string().required(),
    floor: yup.string().required(),
    block: yup.string().required(),
    house: yup.string().required(),
    district: yup.string().required(),
    zone: yup.string().required()
  })

  const { register, control, handleSubmit, errors, reset } = useForm({ 
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValues: bookingInfo
  })

  useEffect(() => {
    reset(bookingInfo)
  }, [ reset, bookingInfo ])

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Container className="booking-input-form">
          <Row>
            <Col>
              <Alert show={alertShow} variant="danger" onClose={() => setAlertShow(false)} dismissible>
                <p>{t("booking.step03.alert_message")}</p>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="firstname">
                <Form.Control 
                  type="text" 
                  name="firstname"
                  placeholder={t("booking.step03.firstname")} 
                  ref={register} />
                { <Form.Text className="float-left">{errors.firstname?.message}</Form.Text> }
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastname">
                <Form.Control 
                  type="text" 
                  name="lastname"
                  placeholder={t("booking.step03.lastname")} 
                  ref={register} />
                { <Form.Text className="float-left">{errors.lastname?.message}</Form.Text> }
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="phone">
                <Form.Control 
                  type="text" 
                  name="phone"
                  placeholder={t("booking.step03.phone")} 
                  ref={register} />
                { <Form.Text className="float-left">{errors.email?.message}</Form.Text> }
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="email">
                <Form.Control 
                  type="email" 
                  name="email"
                  placeholder={t("booking.step03.email")} 
                  ref={register} />
                { <Form.Text className="float-left">{errors.email?.message}</Form.Text> }
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="dob">
                <Controller
                    name="dob"
                    control={control}
                    dateFromat='yyyy-MM-dd'
                    defaultValue={new Date()}
                    render={({ onChange, value}) => (
                        <ReactDatePicker 
                            selected={value} 
                            onChange={onChange}
                            dateFromat='yyyy-MM-dd'
                            className="form-control date-picker" />
                    )}
                    />
                    { <Form.Text className="float-left">{errors.dob?.message}</Form.Text> }
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="gender">
                <Form.Control 
                  as="select" 
                  name="gender"
                  ref={register}>
                      <option value="M">{t("booking.step03.male")}</option>
                      <option value="F">{t("booking.step03.female")}</option>
                </Form.Control>
                { <Form.Text className="float-left">{errors.firstname?.message}</Form.Text> }
              </Form.Group>
            </Col>
          </Row>
          <Row><Col className="address"><span>{t("booking.step03.address")}</span></Col></Row>
          <Row>
            <Col sm={3}>
                <Form.Group controlId="room">
                <Form.Control 
                type="text" 
                name="room"
                placeholder={t("booking.step03.room")} 
                ref={register} />
                { <Form.Text className="float-left">{errors.room?.message}</Form.Text> }
                </Form.Group>
            </Col>
            <Col sm={6}>
                <Form.Group controlId="floor">
                <Form.Control 
                type="text" 
                name="floor"
                placeholder={t("booking.step03.floor")} 
                ref={register} />
                { <Form.Text className="float-left">{errors.floor?.message}</Form.Text> }
                </Form.Group>
            </Col>
            <Col sm={3}>
                <Form.Group controlId="block">
                <Form.Control 
                type="text" 
                name="block"
                placeholder={t("booking.step03.block")} 
                ref={register} />
                { <Form.Text className="float-left">{errors.block?.message}</Form.Text> }
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Group controlId="house">
                <Form.Control 
                type="text" 
                name="house"
                placeholder={t("booking.step03.house")} 
                ref={register} />
                { <Form.Text className="float-left">{errors.house?.message}</Form.Text> }
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Group controlId="district">
                <Form.Control 
                type="text" 
                name="district"
                placeholder={t("booking.step03.district")} 
                ref={register} />
                { <Form.Text className="float-left">{errors.district?.message}</Form.Text> }
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Group controlId="zone">
                <Form.Control 
                type="text" 
                name="zone"
                placeholder={t("booking.step03.zone")} 
                ref={register} />
                { <Form.Text className="float-left">{errors.zone?.message}</Form.Text> }
                </Form.Group>
            </Col>
          </Row>
        </Container>

        <Button type="submit" variant="primary" className="btn-round" >
        {t("booking.btn_cont")}
        </Button>
      </Form>
    </>
  );
};
