import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row, } from 'react-bootstrap'
import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


export const InfoForm = ({ changeInfo, member }) => {
  const { t } = useTranslation()
  
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    gender: yup.string().required(),
    dob: yup.date().required()
  })

  const { register, control, handleSubmit, errors, reset } = useForm({ 
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValues: member
  })

  useEffect(() => {
    reset(member)
  }, [ reset, member ])

  return (
    <Form onSubmit={handleSubmit(changeInfo)}>
      <Container>
        <Row>
          <Col><h4>{t("member.profile.info.account_setting")}</h4></Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Control 
              type="email" 
              name="email"
              placeholder={t("member.profile.info.email")} 
              ref={register} />
              { <Form.Text className="float-left">{errors.email?.message}</Form.Text> }
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="lastname">
              <Form.Control 
              type="text" 
              name="lastname"
              placeholder={t("member.profile.info.lastname")} 
              ref={register} />
              { <Form.Text className="float-left">{errors.lastname?.message}</Form.Text> }
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="firstname">
              <Form.Control 
              type="text" 
              name="firstname"
              placeholder={t("member.profile.info.firstname")} 
              ref={register} />
              { <Form.Text className="float-left">{errors.firstname?.message}</Form.Text> }
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
                    <option value="M">{t("member.profile.info.male")}</option>
                    <option value="F">{t("member.profile.info.female")}</option>
              </Form.Control>
              { <Form.Text className="float-left">{errors.firstname?.message}</Form.Text> }
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="dob">
              <Controller
                  name="dob"
                  control={control}
                  dateFromat='YYYY-MM-dd'
                  render={({ onChange, value}) => (
                      <ReactDatePicker 
                          selected={value} 
                          onChange={onChange}
                          dateFromat='YYYY-MM-dd'
                          className="form-control date-picker" />
                  )}
                  />
                  { <Form.Text className="float-left">{errors.dob?.message}</Form.Text> }
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Button type="submit" variant="primary" className="btn-round mt-3" >
              {t("member.profile.info.btn_save")}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col><span>{t("member.profile.info.statement")}</span></Col>
        </Row>
      </Container>
    </Form>
  );
};
