import React from "react";
import { 
  Table
} from 'react-bootstrap'
import { useTranslation } from "react-i18next";


export const BookingTable = ({booking}) => {
  const { t } = useTranslation();

  return (
    <Table>
      <thead>
        <tr>
          <th>{t("member.profile.booking.date")}</th>
          <th>{t("member.profile.booking.time")}</th>
          <th>{t("member.profile.booking.services")}</th>
          <th>{t("member.profile.booking.service_time")}</th>
        </tr>
      </thead>
      <tbody>
        {booking.map((item, i) => {
          let total = 0
          return (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.time}:00</td>
              <td>
              {item.services.map((e, i) => {
                total += e.duration
                return (
                  <p key={i}>{e.title_zh}</p>
                )
              })}
              </td>
              <td>{total}{t("member.profile.booking.minutes")}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
};
