import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GoQuote } from 'react-icons/go';
import { Trans } from 'react-i18next';

export const AboutTeam = (props) => {
  const { data, asset, id } = props;

  return (
    <section id={id}>
      <Container className="my-3 px-4 p-0 ">
        <Row>
          <Col className="p-0">
            <h1 className="heading">
              <Trans components={[<span className="primary">word</span>]}>{data.title}</Trans>
            </h1>
          </Col>
        </Row>
        <Row>
          {data.members.map((member, index) => {
            return (
              <Col md={6} lg={4} className="p-md-3" key={index}>
                <Card key={index}>
                  <Card.Img src={asset(member.image).default} alt={id} />
                  <Card.ImgOverlay className="p-4">
                    <GoQuote className="icon" />
                    <div className="quote">{member.quote}</div>
                  </Card.ImgOverlay>
                </Card>
                <div className="body p-4">
                  <div className="name">{member.name}</div>
                  <div className="title mt-md-2">{member.title}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
