import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Form,
  Alert,
  Image,
} from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as request from "../../../api/booking";
import letterIcon from "../../../assets/images/booking/booking_noti-mail.svg";
import { HashLink as Link } from "react-router-hash-link";

export const BookingConfirmed = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="booking-confirmed">
      <Image src={letterIcon} className="letter-icon" />
      <h3>{t("booking.confirmed.title")}</h3>
      <span className="mb-5">{t("booking.confirmed.fill_survey")}</span>
      <Link to="/survery">
        <Button variant="primary" className="btn-round mb-3">
          {t("booking.confirmed.btn_fill_survery")}
        </Button>
      </Link>
      <span>
        {t("booking.confirmed.click")}
        <Link to="/profile/booking">{t("booking.confirmed.here")}</Link>
        {t("booking.confirmed.to_see_record")}
      </span>
    </div>
  );
};
