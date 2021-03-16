import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from './ServicesTypeHelper';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

export const ServicesTypes = () => {
  const { t } = useTranslation();
  const asset = require.context('../../../assets/images/services/', true);

  const MainTextContent = ({ item, index }) => {
    return (
      <>
        <div className="num">
          <Trans components={[<span className="digit">word</span>]}>{t(item.sign)}</Trans>
        </div>
        <p className="mt-4 mt-lg-3">{t(item.title)}</p>
        <p className="light mt-4 mt-lg-3">{t(item.content)}</p>
      </>
    );
  };
  return (
    <div className="process-bg">
      <div className="process-con">
        <Container>
          <Row>
            <Col>
              <h2>{t(data.main.title)}</h2>
            </Col>
          </Row>

          {data.main.list.map((item, index) => {
            return (
              <Row className="con" key={item.id}>
                {index % 2 === 0 ? (
                  <>
                    <Col md={{ span: 7, order: 2 }}>
                      <img className="img-con" src={asset(t(item.image)).default} alt="" />
                    </Col>
                    <Col md={{ span: 5, order: 1 }}>
                      <div className="text-con pr-md-2 pr-lg-4">
                        <MainTextContent item={item} index={index} />
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col md={7}>
                      <img className="img-con" src={asset(t(item.image)).default} alt="" />
                    </Col>
                    <Col md={5}>
                      <div className="text-con pl-md-2 pr-lg-4">
                        <MainTextContent item={item} index={index} />
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            );
          })}
        </Container>
      </div>
      <div className="other-tank">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-4">{t(data.other.title)}</h2>
            </Col>
          </Row>
          <Row className="con">
            {data.other.list.map((item) => {
              return (
                <Col md={4} key={item.id}>
                  <div className="mb-4">
                    <img src={asset(t(item.image)).default} alt="" />
                    <p className="title">{t(item.title)}</p>
                    <p className="txt light">{t(item.content)}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};
