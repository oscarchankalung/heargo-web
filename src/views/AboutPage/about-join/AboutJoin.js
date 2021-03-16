import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { Trans } from 'react-i18next';

export const AboutJoin = (props) => {
  const { data, asset, id } = props;

  const bg = { backgroundImage: `url(${asset(data.image).default})` };

  return (
    <section id={id} style={bg}>
      <Container className="p-0 py-5 h-100 d-flex">
        <Row noGutters={true} className="w-100">
          <Col md={6} className="px-4 p-md-0">
            <div className="join-card">
              <h2 className="slogan">{data.slogan}</h2>
              {data.contents.map((content, index) => (
                <p className="content mt-4" key={index}>
                  <Trans components={[<span className="bold">word</span>]}>{content}</Trans>
                </p>
              ))}
              <Link to="/contacts" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="primary" className="btn-round mt-4">
                  {data.button}
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
