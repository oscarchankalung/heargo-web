import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

export const AboutMission = (props) => {
  const { data, asset, id } = props;
  const bg = { backgroundImage: `url(${asset(data.image).default})` };

  return (
    <section id={id}>
      <Container fluid className="p-0">
        <div className="background p-4 p-md-5" style={bg}>
          <Container className="p-0 h-100">
            <Row noGutters={true}>
              <Col md={6} className="p-0 mx-auto">
                <div className="story-text">
                  <h1 className="title text-center">{data.title}</h1>
                  <p className="content text-center mt-3">{data.content}</p>
                </div>
              </Col>
            </Row>
            <Row noGutters={true}>
              <Col md={12} className="p-0">
                <Card>
                  <Card.Body className="p-4">
                    <Card.Title className="slogan">
                      {data.card.slogan}
                    </Card.Title>
                    <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                      <Button
                        variant="outline-white"
                        className="btn-round mt-4"
                      >
                        {data.card.button}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  );
};
