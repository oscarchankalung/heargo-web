import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { 
  Form, 
  Modal, 
  Button, 
  Container,
  Row,
  Col,
  Alert
} from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import * as request from "../../api/auth";
import { useHistory } from "react-router";

export const Login = ({ show, onHide, openRegister, setAuthToken}) => {
  let history = useHistory()
  const { t } = useTranslation();
  const [ alertShow, setAlertShow ] = useState(false);
  
  const schema = yup.object().shape({
    phone: yup.string().required(),
    password: yup.string().required()
  })

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema)})
	const login = requestData => {
    request.login(requestData)
    .then(({data}) => {
      // if (requestData.rememberMe){
      //   localStorage.setItem("authToken", data.accessToken)
      // }
      localStorage.setItem("authToken", data.accessToken)
      setAuthToken(data.accessToken)
      onHide()
      history.push("/")
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
        <Modal.Header>
          <Modal.Title>{t("member.login.title")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(login)}>
            <Container>
              <Row>
                <Col><h5 className="modal_subtitle">{t("member.login.subtitle")}</h5></Col>
              </Row>
              <Row>
                <Col>
                  <Alert show={alertShow} variant="danger" onClose={() => setAlertShow(false)} dismissible>
                    <p>{t("member.login.alert")}</p>
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="phone">
                    <Form.Control 
                      type="text" 
                      name="phone"
                      placeholder={t("member.login.phone")} 
                      ref={register} />
                    { <Form.Text className="float-left">{errors.phone?.message}</Form.Text> }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="password">
                    <Form.Control 
                      type="password" 
                      name="password"
                      placeholder={t("member.login.password")}
                      ref={register} />
                    { <Form.Text className="float-left">{errors.password?.message}</Form.Text> }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>            
                  <Form.Group controlId="rememberMe" className="float-left">
                    <Form.Check 
                      type="checkbox" 
                      name="rememberMe"
                      label={t("member.login.remember_me")}
                      ref={register} />
                  </Form.Group>
                </Col>
                <Col><span className="float-right">{t("member.login.forget_password")}</span></Col>
              </Row>
              <Row className="my-3">
                <Col>
                  <Button type="submit" variant="primary" className="btn-round mx-3" >
                    {t("member.login.btn_login")}
                  </Button>
                </Col>
                <Col>
                  <Button className="btn-round btn-outline-secondary mx-3" onClick={() => {
                    onHide()
                    openRegister()
                  }}>
                    {t("member.login.btn_register")}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col><p className="float-left text-left"><small>{t("member.login.statement")}</small></p></Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
	);
};
