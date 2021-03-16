import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


export const AddAddressForm = ({ addAddress }) => {
  const { t } = useTranslation()
  
  const schema = yup.object().shape({
    room: yup.string().required(),
    floor: yup.string().required(),
    block: yup.string().required(),
    house: yup.string().required(),
    district: yup.string().required(),
    zone: yup.string().required()
  })

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema)})

  return (
    <Form onSubmit={handleSubmit(addAddress)}>
      <Container>
        <Row>
          <Col sm={3}>
            <Form.Group controlId="room">
              <Form.Control 
              type="text" 
              name="room"
              placeholder={t("member.profile.address.room")} 
              ref={register} />
              { <Form.Text className="float-left">{errors.room?.message}</Form.Text> }
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="floor">
              <Form.Control 
              type="text" 
              name="floor"
              placeholder={t("member.profile.address.floor")} 
              ref={register} />
              { <Form.Text className="float-left">{errors.floor?.message}</Form.Text> }
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group controlId="block">
              <Form.Control 
              type="text" 
              name="block"
              placeholder={t("member.profile.address.block")} 
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
              placeholder={t("member.profile.address.house")} 
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
              placeholder={t("member.profile.address.district")} 
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
              placeholder={t("member.profile.address.zone")} 
              ref={register} />
              { <Form.Text className="float-left">{errors.zone?.message}</Form.Text> }
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
              <Form.Group controlId="rememberMe" className="float-left">
                <Form.Check 
                  type="checkbox" 
                  name="default"
                  label={t("member.profile.address.default")}
                  ref={register} />
              </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>      
            <Button type="submit" variant="primary" className="btn-round mt-3 btn-long" >
              {t("member.profile.address.btn_add")}
            </Button>
          </Col>
        </Row>
      </Container>

    </Form>
  );
};
