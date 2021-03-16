import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { useViewport } from '../../../components/useViewport/useViewport';

SwiperCore.use([Navigation]);

export const HomeServices = () => {
  const { t } = useTranslation();
  const { width, breakpoints } = useViewport();

  const list = t('home.services.list', { returnObjects: true });
  const asset = require.context('../../../assets/images/home/', true);
  const slidesPerView =
    width >= breakpoints.xl ? 4 : width >= breakpoints.lg ? 3 : width >= breakpoints.sm ? 2 : 1;

  return (
    <section className="home-services">
      <Container fluid className="p-0">
        <Row noGutters={true} className="align-items-end">
          <Col md={8}>
            <h2 className="title">
              <Trans components={[<span className="primary">word</span>]}>
                {t('home.services.subtitle')}
              </Trans>
            </h2>
          </Col>
          <Col md={{ order: 'last' }} className="p-0 my-5">
            <Swiper slidesPerView={slidesPerView} spaceBetween={20} navigation>
              {list.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={asset(item.image).default} alt={`slide-${index}`}></img>
                    <Row noGutters={true} className="caption">
                      <Col xs="auto" className="mr-3">
                        <div className="sign">
                          <Trans components={[<span className="digit">word</span>]}>
                            {item.sign}
                          </Trans>
                        </div>
                      </Col>
                      <Col>
                        <div className="title">{item.title}</div>
                        <div className="text">{item.text}</div>
                      </Col>
                    </Row>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
          <Col md={4}>
            <HashLink to="/services" onClick={() => window.scrollTo(0, 0)}>
              <div className="action text-md-right">{t('home.services.action')}</div>
            </HashLink>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
