import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { data } from './ServicesPricingHelper';
import { useTranslation } from 'react-i18next';

export const ServicesPricing = () => {
  const { t } = useTranslation();
  const asset = require.context('../../../assets/images/services/', true);

  return (
    <div className="charge-bg">
      <Container className="charge-wrapper py-5">
        <h2 className="charge-tank top-title-tank">{t(data.title)}</h2>
        <Row className="charge-tank top-content-tank charge-list mt-3 mt-lg-5">
          {data.list.map((el) => {
            return (
              <Col xs={12} md={6} lg={4} key={el.id} className="my-3 my-lg-0">
                <div className="charge-con">
                  <img src={asset(t(el.img)).default} alt="" />
                  <div className="charge-con-content p-4">
                    <p className="light mt0">{t(el.title)}</p>
                    <p className="mt-0">{t(el.content1)}</p>
                    <p className="mb-0 mt-0">{t(el.content2)}</p>
                    <p className="mb-0">
                      {t(el.price)} / <span className="light">{t(el.time)}</span>
                    </p>
                    <Button className="orange btn-outline-primary btn-round mt-3 mb-0">
                      {t(el.button)}
                    </Button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="pt-3 pt-md-5">
          <Col>
            <p className="charge-tip">{t(data.tip)}</p>
            <p className="charge-tip note">{t(data.tip_small)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
