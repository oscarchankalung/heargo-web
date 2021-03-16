import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { 
  Form, 
  Modal, 
  Button, 
  Container,
  Row,
  Col,
  Alert
} from 'react-bootstrap'
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import * as request from "../../api/auth";

export const Info = ({ show, onHide, registerPhone, openLogin}) => {
  const { t } = useTranslation();
  const [ alertShow, setAlertShow ] = useState(false)
  
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    dob: yup.date().required(),
    gender: yup.string().required(),
    receive_newsletter: yup.string().required(),
    receive_sms: yup.string().required()
  })

  const { register, control, handleSubmit, errors } = useForm({ resolver: yupResolver(schema)})

  const regInfo = requestData => {
    requestData.dob = moment(requestData.dob).format("YYYY-MM-DD")
    requestData.phone = registerPhone
    request.info(requestData)
    .then(() => {
      onHide()
      openLogin()
    })
    .catch((err) => {
      console.log(err)
      setAlertShow(true)
    })
  }

	return (
      <Modal 
      show={show}
      onHide={onHide} >
        <Modal.Body>
          <Form onSubmit={handleSubmit(regInfo)}>
            <Container>
              <Row>
                <Col><h5 className="modal_subtitle">{t("member.register.information.title")}</h5></Col>
              </Row>
              <Row>
                <Col>
                  <Alert show={alertShow} variant="danger" onClose={() => setAlertShow(false)} dismissible>
                    <p>{t("member.register.information.alert")}</p>
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="firstname">
                    <Form.Control 
                      type="text" 
                      name="firstname"
                      placeholder={t("member.register.information.firstname")} 
                      ref={register} />
                    { <Form.Text className="float-left">{errors.firstname?.message}</Form.Text> }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="lastname">
                    <Form.Control 
                      type="text" 
                      name="lastname"
                      placeholder={t("member.register.information.lastname")} 
                      ref={register} />
                    { <Form.Text className="float-left">{errors.lastname?.message}</Form.Text> }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Control 
                      type="email" 
                      name="email"
                      placeholder={t("member.register.information.email")} 
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
                          <option value="M">{t("member.register.information.male")}</option>
                          <option value="F">{t("member.register.information.female")}</option>
                    </Form.Control>
                    { <Form.Text className="float-left">{errors.firstname?.message}</Form.Text> }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>            
                  <Form.Group controlId="receive_newsletter" className="float-left">
                    <Form.Check 
                      type="checkbox" 
                      name="receive_newsletter"
                      label={t("member.register.information.receive_newsletter")}
                      ref={register} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>            
                  <Form.Group controlId="receive_sms" className="float-left">
                    <Form.Check 
                      type="checkbox" 
                      name="receive_sms"
                      label={t("member.register.information.receive_sms")}
                      ref={register} />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-3">
                <Col>
                  <Button type="submit" variant="primary" className="btn-round btn-long" >
                    {t("member.register.information.btn_register")}
                  </Button>
                </Col>
              </Row>
            </Container>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
	);
};
