import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ChangePasswordForm = ({ changePassword }) => {
  const { t } = useTranslation();
  const [type, setType] = useState("password");

  const schema = yup.object().shape({
    old_password: yup.string().required(),
    password: yup.string().required(),
    password_confirmation: yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const setShowPassword = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <Form onSubmit={handleSubmit(changePassword)}>
      <h4>{t("member.profile.info.change_password")}</h4>
      <Form.Group controlId="old_password">
          <Form.Control 
          type={type} 
          name="old_password"
          placeholder={t("member.profile.info.old_password")} 
          ref={register} />
          { <Form.Text className="float-left">{errors.old_password?.message}</Form.Text> }
      </Form.Group>
      <Form.Group controlId="password">
          <Form.Control 
          type={type} 
          name="password"
          placeholder={t("member.profile.info.new_password")} 
          ref={register} />
          { <Form.Text className="float-left">{errors.password?.message}</Form.Text> }
      </Form.Group>
      <Form.Group controlId="password_confirmation">
          <Form.Control 
          type={type} 
          name="password_confirmation"
          placeholder={t("member.profile.info.reenter_password")} 
          ref={register} />
          { <Form.Text className="float-left">{errors.password_confirmation?.message}</Form.Text> }
      </Form.Group>        
      <Form.Group controlId="rememberMe" className="float-left">
        <Form.Check 
          type="checkbox" 
          name="rememberMe"
          label={t("member.profile.info.show_password")}
          onChange={setShowPassword} />
      </Form.Group>
      <Button type="submit" variant="primary" className="btn-round btn-outline-secondary mt-5" >
        {t("member.profile.info.btn_save_password")}
      </Button>
    </Form>
  );
};
