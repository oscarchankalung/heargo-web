import React from "react";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { IoCalendarOutline } from "react-icons/io5";

export const CalendarButton = (props) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="primary"
      className="mt-auto btn-square mobile-bottom-sticky"
    >
      <IoCalendarOutline className="button-icon" /> {t(props.id)}
    </Button>
  );
};
