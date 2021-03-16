import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

export const ServicesPayments = () => {
  const { t } = useTranslation();

  const data = {
    title: 'services.payments.title',
    content: 'services.payments.content',
    list: [
      { title: 'services.payments.method_1' },
      { title: 'services.payments.method_2' },
      { title: 'services.payments.method_3' },
      { title: 'services.payments.method_4' }
    ]
  };

  return (
    <section id="payments">
      <Container className="py-5">
        <Row noGutters={true}>
          <Col md={5} className="text">
            <h2>{t(data.title)}</h2>
            <p className="light">{t(data.content)}</p>
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="list mt-5 mt-md-0">
            {data.list.map((item, index) => {
              return (
                <p className="action" key={index}>
                  {t(item.title)}
                </p>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
