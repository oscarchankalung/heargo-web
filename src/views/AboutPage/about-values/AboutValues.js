import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Trans } from "react-i18next";

export const AboutValues = (props) => {
  const { data, asset, id } = props;

  return (
    <section id={id}>
      <Container className="px-4 my-3">
        <Row noGutters={true}>
          <Col md={8} className="mx-auto">
            <div className="heading">
              <h1 className="title mb-3">{data.title}</h1>
              <h2 className="slogan">
                <Trans components={[<span className="primary">word</span>]}>
                  {data.slogan}
                </Trans>
              </h2>
              <p className="content mt-3">{data.content}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="values-list">
        {data.list.map((item, index) => {
          const bg = { backgroundImage: `url(${asset(item.image).default})` };
          const isFull = item.position === "full";
          return (
            <Container fluid={isFull} key={index} className="p-0">
              <Row noGutters={true} className={!isFull ? "pb-md-5" : ""}>
                <div className={`values-item ${item.position}`}>
                  <div
                    className={`background ${item.position}`}
                    style={bg}
                  ></div>
                  <Card className={item.position}>
                    <Card.Body className="p-4">
                      <Card.Title className="title mb-2">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="content">{item.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Row>
            </Container>
          );
        })}
      </div>
    </section>
  );
};
