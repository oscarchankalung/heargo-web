import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { 
  Form, 
  Modal, 
  Button, 
  Container,
  Row,
  Col,
  Alert,
  InputGroup
} from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import * as request from "../../api/auth";

export const Register = ({ show, onHide, openLogin, openInfo}) => {
  const { t } = useTranslation();
  const [ alertShow, setAlertShow ] = useState(false)
  const [ disableSMSBtn, setDisableSMSBtn ] = useState(false)
  const countDown = 60
  const [ counter, setCounter ] = useState(countDown)

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter-1), 1000)
    counter === 0 && setDisableSMSBtn(false)
  }, [counter])
  
  const schema = yup.object().shape({
    phone: yup.string().required(),
    sms: yup.number().required(),
    password: yup.string().required()
  })

  const { register, handleSubmit, getValues, errors } = useForm({ resolver: yupResolver(schema)})
	const sendSMS = () => {
    const phone = getValues("phone")
    if (phone){
      setCounter(countDown)
      setDisableSMSBtn(true)
      request.sendSMSCode({phone: phone})
      .then(response => console.log(response))
      .catch((err) => {
        setAlertShow(true)
      })
    }else{
      setAlertShow(true)
    }
  }

  const reg = requestData => {
    request.register(requestData)
    .then(() => {
      onHide()
      openInfo(getValues("phone"))
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
          <Modal.Title>{t("member.register.phone.title")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(reg)}>
            <Container>
              <Row>
                <Col><h5 className="modal_subtitle">{t("member.register.phone.subtitle")}</h5></Col>
              </Row>
              <Row>
                <Col>
                  <Alert show={alertShow} variant="danger" onClose={() => setAlertShow(false)} dismissible>
                    <p>{t("member.register.phone.alert")}</p>
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="phone">
                    <Form.Control 
                      type="text" 
                      name="phone"
                      placeholder={t("member.register.phone.phone")} 
                      ref={register} />
                    { <Form.Text className="float-left">{errors.phone?.message}</Form.Text> }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="verifyCode">
                    <InputGroup>
                      <Form.Control 
                        type="password" 
                        name="sms"
                        placeholder={t("member.register.phone.verify_code")}
                        ref={register} />
                      <InputGroup.Append>
                        <Button onClick={sendSMS} disabled={disableSMSBtn}>
                          { disableSMSBtn ? counter : t("member.register.phone.send_code")}
                          {/* {t("member.register.phone.send_code")} */}
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                    { <Form.Text className="float-left">{errors.verify_code?.message}</Form.Text> }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="password">
                    <Form.Control 
                      type="text" 
                      name="password"
                      placeholder={t("member.register.phone.password")} 
                      ref={register} />
                    { <Form.Text className="float-left">{errors.password?.message}</Form.Text> }
                    <Form.Text className="float-left">{t("member.register.phone.password_hint")}</Form.Text> 
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-3">
                <Col>
                  <Button type="submit" variant="primary" className="btn-round mx-3" >
                    {t("member.register.phone.btn_register")}
                  </Button>
                </Col>
                <Col>
                  <Button className="btn-round btn-outline-secondary mx-3" onClick={() => {
                    onHide()
                    openLogin()
                  }}>
                    {t("member.register.phone.btn_login")}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col><p className="float-left text-left"><small>{t("member.register.phone.statement")}</small></p></Col>
              </Row>
            </Container>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
	);
};
