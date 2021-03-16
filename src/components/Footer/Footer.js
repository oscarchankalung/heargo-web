import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation()

  const data = {
    about_heargo: [{
      title: "brand_story",
      url: "/about"
    },{
      title: "mission",
      url: "/about"
    },{
      title: "experts",
      url: "/about"
    },{
      title: "value",
      url: "/about"
    },{
      title: "contact_us",
      url: "/about"
    }],
    services: [{
      title: "workflow",
      url: "/services"
    },{
      title: "service_charge",
      url: "/services"
    },{
      title: "how_to_book",
      url: "/services"
    },{
      title: "payment",
      url: "/services"
    },{
      title: "q_and_a",
      url: "/services"
    }],
    products: [{
      title: "handsaton",
      url: "/services"
    },{
      title: "phonak",
      url: "/services"
    },{
      title: "accessory",
      url: "/services"
    },{
      title: "battery",
      url: "/services"
    }],
    knowledge: [{
      title: "what_is_hearing_impairment",
      url: "/services"
    },{
      title: "choose_hearing_aid",
      url: "/services"
    },{
      title: "user_guide",
      url: "/services"
    },{
      title: "maintenance",
      url: "/services"
    },{
      title: "connect_accessories",
      url: "/services"
    }]
  }


  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm={9}>
            <Container>
              <Row>
                {Object.keys(data).map((key) => {
                  return (
                    <Col key={key}>
                      <h5>{t("footer."+key)}</h5>
                      <ul className="mt-3">
                        {data[key].map((item, i) => {
                          return (
                            <li key={i} className="font-weight-lighter">
                              <Link className="white" to={item.url}>
                                {t("footer."+item.title)}
                              </Link>
                              </li>
                          )
                        })}
                      </ul>
                    </Col>
                  )
                })}
                <Col>
                  <h5>
                    <Link className="white" to="/privacy">
                      {t("footer.privacy")}
                    </Link>
                  </h5>
                  <h5 className="mt-4">
                    <Link className="white" to="/terms_and_condition">
                      {t("footer.t_and_c")}
                    </Link>
                  </h5>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={3}>
            <h4 className="title white">{t("footer.face_problem")}</h4>
            <span className="subtitle font-weight-lighter">{t("footer.find_us")}</span>
            <span className="contact mt-3 font-weight-lighter">{t("footer.phone")}</span>
            <span className="contact font-weight-lighter">{t("footer.whatsapp")}</span>
            <Button className="btn-round mt-3">{t("footer.btn_contact")}</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <hr />
            <span className="copyright">{t("footer.right")}</span>
          </Col>
        </Row>
      </Container>
      <div>
      </div>
    </div>
  );
};
