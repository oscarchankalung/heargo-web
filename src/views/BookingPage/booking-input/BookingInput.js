import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, Row, Col } from "react-bootstrap";
import {BookingInputForm} from "./BookingInputForm";
import * as request from "../../../api/member";

export const BookingInput = ({ 
  openLogin, 
  authToken,
  nextStep,
  bookingInfo,
  setBookingInfo
}) => {
  const { t } = useTranslation()
  const [ alertShow, setAlertShow ] = useState(false)

  useEffect(() => {
    async function fetchData(){
      const member = await request.fetchMember()
      member.data.dob = new Date(member.data.dob)
      const address = await request.fetchMemberDefaultAddresses()
      setBookingInfo({...member.data, ...address.data})
    }
    fetchData()
  }, [authToken, setBookingInfo])

  const submit = requestData => {
    setBookingInfo(requestData)
    nextStep(3)
  }

  return (
    <Container className="booking-input">
      <Row hidden={authToken}>
        <Col>
          <Button 
            onClick={openLogin}
            className="btn-round btn-long">
              {t("booking.step03.login_to_continue")}
            </Button>
          <span>{t("booking.step03.continue_to_use_guest")}</span>
        </Col>
      </Row>
      <Row>
        <Col> 
        <BookingInputForm 
          alertShow={alertShow}
          setAlertShow={setAlertShow}
          submit={submit}
          bookingInfo={bookingInfo} />
        </Col>
      </Row>
    </Container>
      
     
  );
};
