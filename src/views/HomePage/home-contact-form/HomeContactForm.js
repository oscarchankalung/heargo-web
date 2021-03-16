import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useTranslation } from "react-i18next";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Alert, Button, Form } from "react-bootstrap";
import * as request from "../../../api/web";

export const HomeContactForm = () => {
  const { t } = useTranslation();
	const [success, setSuccess] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required()
  })

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema)})

  const submitContact = requestData => {
		const req = {
			to: requestData.email,
			subject: "New Request - "+requestData.phone,
			message: 
			"Name: "+requestData.name+
			"<br>Email: "+requestData.email+
			"<br>Phone: "+requestData.phone
		}

    request.submitContactForm(req)
    .then(() => setSuccess(true))
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <section className="contact-form">
      <h2 className="heading">{t("home.contact_form.title")}</h2>
      <span>{t("home.contact_form.subtitle")}</span>
			<div className="contact-form-container">
				<Form onSubmit={handleSubmit(submitContact)}>
					<Container className="mt-5">
						<Row>
							<Col sm={3}>
								<Form.Group controlId="name">
									<Form.Control 
										type="text" 
										name="name"
										placeholder={t("home.contact_form.name")} 
										ref={register} />
									{ <Form.Text className="float-left">{errors.name?.message}</Form.Text> }
								</Form.Group>
							</Col>
							<Col sm={3}>
								<Form.Group controlId="phone">
									<Form.Control 
										type="text" 
										name="phone"
										placeholder={t("home.contact_form.phone")} 
										ref={register} />
									{ <Form.Text className="float-left">{errors.phone?.message}</Form.Text> }
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group controlId="email">
									<Form.Control 
										type="email" 
										name="email"
										placeholder={t("home.contact_form.email")} 
										ref={register} />
									{ <Form.Text className="float-left">{errors.email?.message}</Form.Text> }
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Alert show={success} variant="success" onClose={() => setSuccess(false)} dismissible>
									<p>{t("home.contact_form.success_msg")}</p>
								</Alert>
							</Col>
						</Row>
						<Row className="my-3">
							<Col>
								<Button type="submit" variant="primary" className="btn-round" >
									{t("home.contact_form.btn_submit")}
								</Button>
							</Col>
						</Row>
					</Container>
				</Form>
			</div>
    </section>
  );
};
