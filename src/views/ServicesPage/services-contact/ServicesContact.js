import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export const ServicesContact = () => {
  const { t } = useTranslation();
  const asset = require.context('../../../assets/images/services/', true);

  const data = {
    title: 'services.contact.title',
    button: 'services.contact.button',
    image: 'services.contact.image'
  };
  const bg = { backgroundImage: `url(${asset(t(data.image)).default})` };

  return (
    <section id="contact">
      <Container fluid className="contact-bg p-0" style={bg}>
        <Container className="h-100">
          <Row noGutters={true} className="h-100 w-100">
            <Col md={6} className="contact-card">
              <h2 className="title mb-4">{t(data.title)}</h2>
              <Link to="/contacts" onClick={() => window.scrollTo(0, 0)}>
                <Button className="btn-round btn-outline-white">{t(data.button)}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
