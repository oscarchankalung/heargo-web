import React from "react";
import { ListGroup } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import infoSVG from "../../assets/images/member/Login_profile.svg";
import addressSVG from "../../assets/images/member/Login_address.svg";
import bookingSVG from "../../assets/images/member/Login_order.svg";
import productSVG from "../../assets/images/member/Login_product.svg";
import batterySVG from "../../assets/images/member/Login_battery.svg";
import reportSVG from "../../assets/images/member/Login_report.svg";
import logoutSVG from "../../assets/images/member/Login_logout.svg";
import { Link } from "react-router-dom";

export const ProfileList = () => {
  const { t } = useTranslation();

  return (
        <ListGroup>
            <ListGroup.Item>
                <Link to="/profile/info">
                    <img src={infoSVG} className="icon mr-3" alt="icon" />
                    {t("member.profile.list.info")}
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/profile/address">
                    <img src={addressSVG} className="icon mr-3" alt="icon" />
                    {t("member.profile.list.address")}
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/profile/booking">
                    <img src={bookingSVG} className="icon mr-3" alt="icon" />
                    {t("member.profile.list.booking")}
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/profile/product">
                    <img src={productSVG} className="icon mr-3" alt="icon" />
                    {t("member.profile.list.product")}
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/profile/battery">
                    <img src={batterySVG} className="icon mr-3" alt="icon" />
                    {t("member.profile.list.battery")}
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/profile/report">
                    <img src={reportSVG} className="icon mr-3" alt="icon" />
                    {t("member.profile.list.report")}
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/logout">
                    <img src={logoutSVG} className="icon mr-3" alt="icon" />
                    {t("member.profile.list.logout")}
                </Link>
            </ListGroup.Item>
        </ListGroup>
  );
};
