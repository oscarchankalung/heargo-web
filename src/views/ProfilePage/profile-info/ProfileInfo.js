import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { InfoForm } from "./InfoForm";
import { ChangePasswordForm } from "./ChangePasswordForm";
import * as request from "../../../api/member";

export const ProfileInfo = () => {
  const { t } = useTranslation();
  const [alertShow, setAlertShow] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [member, setMember] = useState({
    id: "",
    phone: "",
    email: "",
    firstname: "",
    lastname: "",
    dob: new Date("1990-01-01"),
    gender: "M",
    receive_newsletter: false,
    receive_sms: false,
  });

  useEffect(() => {
    request
      .fetchMember()
      .then(({ data }) => {
        data.dob = new Date(data.dob);
        setMember(data);
      })
      .catch((err) => {
        console.log(err);
        setAlertShow(true);
      });
  }, []);

  const changeInfo = (requestData) => {
    requestData.dob = moment(requestData.dob).format("YYYY-MM-DD");
    request
      .updateMemberInfo(requestData)
      .then(() => setSuccessShow(true))
      .catch((err) => {
        console.log(err);
        setAlertShow(true);
      });
  };

  const changePassword = (requestData) => {
    console.log(requestData);
    request
      .updateMemberPassword(requestData)
      .then(() => setSuccessShow(true))
      .catch((err) => {
        console.log(err);
        setAlertShow(true);
      });
  };

  return (
    <Container className="profile_content">
      <Row>
        <Col>
          <div className="mb-4">
            <h1>{t("member.profile.info.hi")}{member.firstname}</h1>
            <h3>{t("member.profile.info.welcome_back")}</h3>
          </div>
          <div className="mb-4">
            <h2>{t("member.profile.info.account_info")}</h2>
            <hr />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert
            show={alertShow}
            variant="danger"
            onClose={() => setAlertShow(false)}
            dismissible
          >
            <p>{t("member.profile.iÎnfo.alert_message")}</p>
          </Alert>
          <Alert
            show={successShow}
            variant="success"
            onClose={() => setSuccessShow(false)}
            dismissible
          >
            <p>{t("member.profile.info.success_message")}</p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <InfoForm changeInfo={changeInfo} member={member} />
        </Col>
        <Col sm={4}>
          <ChangePasswordForm changePassword={changePassword} />
        </Col>
      </Row>
    </Container>
  );
};
