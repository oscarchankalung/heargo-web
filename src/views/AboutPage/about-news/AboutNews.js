import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useViewport } from '../../../components/useViewport/useViewport';

SwiperCore.use([Navigation]);

export const AboutNews = (props) => {
  const { data, asset, id } = props;
  const { width, breakpoints } = useViewport();
  const isMobile = width <= breakpoints.sm;
  const isTablet = width <= breakpoints.md;

  return (
    <section id={id}>
      <Container className="px-4 px-sm-0 pb-5">
        <Row noGutters={true}>
          <Col>
            <h1 className="title">{data.title}</h1>
          </Col>
        </Row>
      </Container>
      <Container className="px-4 px-sm-0">
        <Row noGutters={true}>
          <Col className="p-0">
            <Swiper slidesPerView={isMobile ? 1 : 2} spaceBetween={isTablet ? 40 : 80} navigation>
              {data.blogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Card>
                    <Card.Img variant="top" src={asset(blog.image).default} />
                    <Card.Body className="p-4 p-sm-5">
                      <Row>
                        <Col xs={12}>
                          <span className="date">{blog.date}</span>
                          <span className="tag ml-3 py-1 px-3">{blog.tag}</span>
                        </Col>
                        <Col xs={12} className="mt-3">
                          <div className="title">{blog.title}</div>
                          <div className="preview mt-4">{blog.preview}</div>
                          <div className="action mt-4">{blog.more}</div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
