import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export const ServicesConsult = () => {
  const { t } = useTranslation();
  const asset = require.context('../../../assets/images/services/', true);

  const data = {
    title: 'services.consult.title',
    content: 'services.consult.content',
    action: 'services.consult.action',
    image: 'services.consult.image'
  };
  const bg = { backgroundImage: `url(${asset(t(data.image)).default})` };

  return (
    <section id="consult">
      <Container fluid className="consult-bg p-0" style={bg}>
        <Container className="h-100">
          <Row noGutters={true} className="h-100 w-100">
            <Col xs={6} className="consult-card ml-auto">
              <h2 className="title">{t(data.title)}</h2>
              <p className="content light">{t(data.content)}</p>
              <Link to="/contacts" onClick={() => window.scrollTo(0, 0)}>
                <p className="action">{t(data.action)}</p>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
