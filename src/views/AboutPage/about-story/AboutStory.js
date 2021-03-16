import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import { useViewport } from '../../../components/useViewport/useViewport';

export const AboutStory = (props) => {
  const { data, asset, id } = props;
  const { width, breakpoints } = useViewport();
  const isMobile = width < breakpoints.md;

  const contents = data.contents.map((content, index) => {
    return (
      <p className="content light" key={index}>
        <Trans components={[<span className="bold">word</span>]}>{content}</Trans>
      </p>
    );
  });

  const bg = { backgroundImage: `url(${asset(data.image).default})` };

  return (
    <section id={id}>
      <Container className="p-0">
        <Row noGutters={true} className="align-items-center">
          <Col md={6} className="p-0">
            <div className="story-card p-4 pr-lg-5">
              <h1 className="title mb-2">{data.title}</h1>
              <h3 className="slogan">
                <Trans components={[<span className="primary">word</span>]}>{data.slogan}</Trans>
              </h3>
              {!isMobile && <div className="contents mt-3">{contents}</div>}
            </div>
          </Col>
          <Col md={6} className="p-0">
            <div className="story-image">
              <div className="image" style={bg}></div>
              {isMobile && <div className="contents mt-3 pr-4">{contents}</div>}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
