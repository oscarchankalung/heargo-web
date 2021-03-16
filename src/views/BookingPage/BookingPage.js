import React, { useEffect, useState } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { 
  Col, 
  Container, 
  Row
 } from "react-bootstrap";
import moment from "moment";
import { BookingTop } from "./booking-top/BookingTop"
import { BookingChooseServices } from "./booking-choose-services/BookingChooseServices"
import { BookingChooseDatetime } from "./booking-choose-datetime/BookingChooseDatetime"
import { BookingInput } from "./booking-input/BookingInput"
import { BookingConfirm } from "./booking-confirm/BookingConfirm"
import { BookingPayment } from "./booking-payment/BookingPayment"
import { BookingConfirmed } from "./booking-confirmed/BookingConfirmed"
import * as request from "../../api/booking";


export const BookingPage = ({openLogin, authToken}) => {
  let history = useHistory()
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState([])
  const [selectedDuration, setSelectedDuration] = useState(0)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(0)
  const [bookingInfo, setBookingInfo] = useState({
    id: "",
    phone: "",
    email: "",
    firstname: "",
    lastname: "",
    dob: new Date("1990-01-01"),
    gender: "M",
    room: "",
    floor: "",
    block: "",
    house: "",
    district: "",
    zone: ""
  })
  const [bookingId, setBookingId] = useState("");

  const confirmBooking = requestData => {
    let serviceList = []
    selectedService.forEach((item) => {
      serviceList.push(item.id)
    })
    request.confirmBooking({
      ...bookingInfo, 
      ...requestData, 
      date: moment(selectedDate).format("YYYY-MM-DD"),
      time: selectedTime,
    Services: serviceList
    }).then(({data}) => {
      setBookingId(data.id)
      setStep(5)
      history.push("/booking/step-5")
    })
    .catch((err) => console.log(err))
  }

  const confirmPayment = requestData => {
    request.confirmPayment(bookingId, requestData)
    .then(({data}) => {
      setStep(0)
      history.push("/booking/confirmed")
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (selectedService === []){
      history.push("/booking/step-1")
    }
  }, [history, selectedService])

  const nextStep = (currentStep) => {
    // console.log(selectedService)
    switch (currentStep) {
      case 1:
        setStep(2)
        history.push("/booking/step-2")
        break;
      case 2:
        setStep(3)
        history.push("/booking/step-3")
        break;
      case 3:
        setStep(4)
        history.push("/booking/step-4")
        break;
      default:
        break;
    }
  }

  
  return (
  <div className="booking">
    <Container>
      <Row hidden={step === 0}>
        <Col><BookingTop step={step}/></Col>
      </Row>
      <Row>
        <Col>
            <Switch>
              {
                /* Redirect from eCommerce root URL to /customers */
                <Redirect
                  exact={true}
                  from="/booking"
                  to={`/booking/step-${step}`}
                />
              }
              <Route path="/booking/step-1">
                <BookingChooseServices
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  setSelectedDuration={setSelectedDuration}
                  nextStep={nextStep}
                />
              </Route>
              <Route path="/booking/step-2">
                <BookingChooseDatetime
                  selectedService={selectedService}
                  selectedDuration={selectedDuration}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                  nextStep={nextStep}
                />
              </Route>
              <Route path="/booking/step-3">
                <BookingInput
                  nextStep={nextStep}
                  openLogin={openLogin}
                  authToken={authToken}
                  bookingInfo={bookingInfo}
                  setBookingInfo={setBookingInfo}
                />
              </Route>
              <Route path="/booking/step-4">
                <BookingConfirm
                  selectedService={selectedService}
                  selectedDuration={selectedDuration}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  bookingInfo={bookingInfo}
                  confirmBooking={confirmBooking}
                />
              </Route>
              <Route path="/booking/step-5">
                <BookingPayment
                  confirmPayment={confirmPayment}
                />
              </Route>
              <Route path="/booking/confirmed">
                <BookingConfirmed
                />
              </Route>
              <Redirect to="/error" />
            </Switch>
        </Col>
      </Row>
    </Container>
  </div>
  );
};
