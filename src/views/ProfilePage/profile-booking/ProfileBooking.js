import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as request from "../../../api/member";
import { BookingTable } from "./BookingTable";


export const ProfileBooking = () => {
  const { t } = useTranslation();
  const [ booking, setBooking ] = useState([])

  useEffect(() => {
    request.fetchBooking()
    .then(({data}) => {
      setBooking(data)
    })
    .catch(err => console.log(err))
  }, [setBooking])

  return (
    <div className="profile_content">
      <div className="mb-4">
        <h2>{t("member.profile.booking.title")}</h2>
        <hr />
      </div>
      <BookingTable booking={booking}/>
    </div>
  );
};
