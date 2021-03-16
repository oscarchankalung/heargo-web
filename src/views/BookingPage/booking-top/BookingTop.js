import React from "react";
import { useTranslation } from "react-i18next";

export const BookingStepIcon = ({ step, title, active }) => {
  const { t } = useTranslation()
  return (
    <div className={`step ${active}`}>
        <span className="step-number">{step}</span>
        <span className="step-title">{t(title)}</span>
    </div>
  )
}

export const BookingTop = ({step}) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="topbar">
        <div className="topbar-circle">
          <span className="circle-title">{t("booking.step")}</span>
          <span className="circle-number">0{step}</span>
        </div>
        <h1>{t(`booking.step0${step}.title`)}</h1>
      </div>
      <div className="stepbar">
        <BookingStepIcon 
        step="1" 
        title="booking.choose_services"
        active={step === 1 ? "active" : ""} />
        <hr />
        <BookingStepIcon 
        step="2" 
        title="booking.choose_date"
        active={step === 2 ? "active" : ""} />
        <hr />
        <BookingStepIcon 
        step="3" 
        title="booking.provide_info"
        active={step === 3 ? "active" : ""} />
        <hr />
        <BookingStepIcon 
        step="4" 
        title="booking.confirm_booking"
        active={step === 4 ? "active" : ""} />
        <hr />
        <BookingStepIcon 
        step="5" 
        title="booking.provide_payment"
        active={step === 5 ? "active" : ""} />
      </div>
    </>
  );
};
