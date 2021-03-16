import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import serviceImage1 from "../../../assets/images/knowledge/expert_service-1.png";
import serviceImage2 from "../../../assets/images/knowledge/expert_service-2.png";
import serviceImage3 from "../../../assets/images/knowledge/expert_service-3.jpg";

export const BottomServices = () => {
  const { t } = useTranslation();

  return (
    <div className="bottom-services">
      <div>
        <h2>{t("knowledge.bottm_title")}</h2>
        <span>{t("knowledge.bottm_subtitle")}</span>
      </div>
      <div className="bottom-service-list">
        <Container>
          <Row>
            <Col>
              <div className="bottom-service-item">
                <div className="double-border">
                  <Image src={serviceImage1} />
                </div>
                <h6 className="mt-3">{t("knowledge.bottom_service1")}</h6>
              </div>
            </Col>
            <Col>
              <div className="bottom-service-item">
                <div className="double-border">
                  <Image src={serviceImage2} />
                </div>
                <h6 className="mt-3">{t("knowledge.bottom_service2")}</h6>
              </div>
            </Col>
            <Col>
              <div className="bottom-service-item">
                <div className="double-border">
                  <Image src={serviceImage3} />
                </div>
                <h6 className="mt-3">{t("knowledge.bottom_service3")}</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Link to="/contact">
        <Button className="btn-round">{t("knowledge.btn_contact")}</Button>
      </Link>
      <span className="mt-3">{t("knowledge.phone_consult")}</span>
    </div>
  );
};
