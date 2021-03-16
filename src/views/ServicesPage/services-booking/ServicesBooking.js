import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { data } from './ServicesBookingHelper';

SwiperCore.use([Autoplay, EffectFade]);

export const ServicesBooking = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const asset = require.context('../../../assets/images/services/', true);

  return (
    <section id="booking">
      <Container className="py-5">
        <Row noGutters={true} className="justify-content-md-center">
          <Col md={4} className="text">
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              effect="fade"
              speed={1}
              fadeEffect={{ crossFade: true }}
              loop={true}
            >
              {data.list.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <h2 className="mb-3">{t(data.title)}</h2>
                    <p className="primary">{t(item.title)}</p>
                    <p className={`content ${lang}`}>{t(item.content)}</p>
                    <img
                      src={asset(t(item.icons)).default}
                      alt={`steps ${item.id}`}
                      className="mt-3"
                    ></img>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
          <Col md={{ span: 4, offset: 1 }} className="phone mt-5 mt-md-0">
            <img src={asset(t(data.phone)).default} alt="phone"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
