import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { useViewport } from '../../../components/useViewport/useViewport';

export const ServicesSuitable = () => {
  const { t } = useTranslation();
  const { width, breakpoints } = useViewport();
  const isMobile = width <= breakpoints.sm;
  const isTablet = width <= breakpoints.md;
  const asset = require.context('../../../assets/images/services/', true);

  const data = {
    title: 'services.suitable.title',
    list: [
      {
        id: 1,
        text: 'services.suitable.disabled_text',
        image: 'services.suitable.disabled_image'
      },
      {
        id: 2,
        text: 'services.suitable.recovery_text',
        image: 'services.suitable.recovery_image'
      },
      {
        id: 3,
        text: 'services.suitable.companion_text',
        image: 'services.suitable.companion_image'
      },
      {
        id: 4,
        text: 'services.suitable.flexible_text',
        image: 'services.suitable.flexible_image'
      }
    ]
  };
  return (
    <section id="suitable">
      <Container className="px-4 px-sm-0 pb-5">
        <Row noGutters={true}>
          <Col>
            <h2 className="font-weight-normal">{t(data.title)}</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-4 px-sm-0 pb-5">
        <Row noGutters={true}>
          <Col>
            <Swiper
              slidesPerView={isMobile ? 1.5 : isTablet ? 2.5 : 4}
              spaceBetween={isMobile ? 20 : 40}
              centeredSlides={true}
              loop={true}
            >
              {data.list.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="circle">
                      <img src={asset(t(item.image)).default} alt="" />
                      <h3 className="layer">{t(item.text)}</h3>
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
