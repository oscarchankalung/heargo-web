import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation]);

export const HomeProducts = () => {
  const { t } = useTranslation();

  const list = t("home.products.list", { returnObjects: true });
  const productsLink = ["/products", "/products", "/products"];
  const asset = require.context("../../../assets/images/home/", true);

  return (
    <section className="home-products">
      <Container fluid className="p-0">
        <Row noGutters={true} className="align-items-center">
          <Col lg={{ number: 5, order: "last" }} className="product-card mb-5">
            <h2 className="title">{t("home.products.subtitle")}</h2>
            <p className="text mt-4">{t("home.products.text")}</p>
            <HashLink to="/products" onClick={() => window.scrollTo(0, 0)}>
              <div className="action mt-4">{t("home.products.action")}</div>
            </HashLink>
          </Col>
          <Col lg={7} className="product-slides p-0">
            <Swiper slidesPerView={1} spaceBetween={0} navigation dir="rtl">
              {list.map((item, index) => {
                item.link = productsLink[index];
                return (
                  <SwiperSlide key={index}>
                    <img
                      src={asset(item.image).default}
                      alt={`slide-${index}`}
                    ></img>
                    <div className="caption mt-sm-4">
                      <h5 className="text text-center">{item.text}</h5>
                      <HashLink
                        to={item.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <Button
                          variant="outline-secondary"
                          className="btn-round mt-3"
                        >
                          {t("home.products.button")}
                        </Button>
                      </HashLink>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
