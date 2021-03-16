import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENT
import { Typography } from 'antd';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Desktop, Mobile, Tablet, BigScrren } from '../../components/Responsive';

import { data, steps, ProductsList } from './data';

import './index.scss';

// IMAGES
import icon1 from '../../assets/images/product/icons/Products_compare5.svg';
import icon2 from '../../assets/images/product/icons/Products_compare7.svg';
import icon3 from '../../assets/images/product/icons/Products_compare2.svg';
import icon4 from '../../assets/images/product/icons/Products_compare8.svg';

const { Title } = Typography;

const arrayColor = [
  '#f16338',
  '#c4b8ad',
  '#6acbd6',
  '#febe75',
  '#6e542d',
  '#a2a2a2',
  '#959cab',
  '#4d515a'
];

const ProductDetail = () => {
  const [localState, setLocalState] = useState({
    data: null
  });

  const { product_id } = useParams();

  useEffect(() => {
    const productDetail = data.find((v) => v.id === Number(product_id));

    setLocalState({ data: productDetail });
  }, [product_id]);

  if (!localState.data) return null;

  return (
    <div className="product-detail-page">
      <Container className="product-detail-banner-wrapper" fluid>
        <Container>
          <Row>
            <Col className="product-img-wrapper" lg={6} xl={6} md={6} xs={12} sm={12}>
              <img className="product-img" src={localState.data.img} alt="" />
            </Col>
            <Col className="product-name-wrapper p-3" lg={6} xl={6} md={6} xs={12} sm={12}>
              <Title level={5} className="mb-0 font-weight-light">
                {localState.data.brand}
              </Title>
              <Title className="mt-0 mb-2 font-weight-normal">{localState.data.name}</Title>

              <Row className="product-description-wrapper mt-3">
                <Col xl={6} lg={6} md={6} xs={12} sm={12} className="product-description-item mb-4">
                  <span>
                    <img src={icon1} alt="" />
                  </span>
                  <Title level={5} className="font-weight-light mb-0 ml-3">
                    輕度至中度嚴重聽障
                  </Title>
                </Col>
                <Col xl={6} lg={6} md={6} xs={12} sm={12} className="product-description-item mb-4">
                  <span>
                    <img src={icon2} alt="" />
                  </span>
                  <Title level={5} className="font-weight-light mb-0  ml-3">
                    微型耳背式
                  </Title>
                </Col>
              </Row>

              <div>
                <Title level={5} className="font-weight-light">
                  專為初次配戴者而設：讓您重拾優秀聆聽體驗
                </Title>
              </div>
              <div>
                <Title level={5} className="font-weight-light">
                  細小體積，長度僅2.5cm
                </Title>
              </div>
              <div>
                <Title level={5} className="font-weight-light">
                  設計時尚，舒適耐用
                </Title>
              </div>

              <div className="product-color-wrapper mt-4">
                {arrayColor.map((v, i) => (
                  <div key={i} className="product-color-item mr-2" style={{ backgroundColor: v }} />
                ))}
              </div>

              <Title level={5} className="font-weight-light mt-2">
                星空红寶石
              </Title>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="product-features-wrapper mt-5 mb-5">
        <Row>
          {localState.data.features.map((v) => {
            return (
              <>
                <BigScrren>
                  <div className="product-features-item">
                    <div className="img-wrapper mb-2">
                      <img src={v.img} alt="" />
                    </div>
                    <Title level={5} className="font-weight-light mb-0">
                      {v.title}
                    </Title>
                    {v.subTitle && (
                      <Title level={5} className="font-weight-light mt-1">
                        {v.subTitle}
                      </Title>
                    )}
                  </div>
                </BigScrren>
                <Tablet>
                  <div className="product-features-item">
                    <div className="img-wrapper mb-2">
                      <img src={v.img} alt="" />
                    </div>
                    <Title level={5} className="font-weight-light mb-0">
                      {v.title}
                    </Title>
                    {v.subTitle && (
                      <Title level={5} className="font-weight-light mt-1">
                        {v.subTitle}
                      </Title>
                    )}
                  </div>
                </Tablet>
                <Desktop>
                  <div className="product-features-item">
                    <div className="img-wrapper mb-2">
                      <img src={v.img} alt="" />
                    </div>
                    <Title level={5} className="font-weight-light mb-0">
                      {v.title}
                    </Title>
                    {v.subTitle && (
                      <Title level={5} className="font-weight-light mt-1">
                        {v.subTitle}
                      </Title>
                    )}
                  </div>
                </Desktop>
                <Mobile>
                  <Col xs={12} sm={12}>
                    <div className="product-features-item mobile mb-4">
                      <div className="img-wrapper mb-2">
                        <img src={v.img} alt="" />
                      </div>
                      <Title level={5} className="font-weight-light mb-0">
                        {v.title}
                      </Title>
                      {v.subTitle && (
                        <Title level={5} className="font-weight-light mt-1">
                          {v.subTitle}
                        </Title>
                      )}
                    </div>
                  </Col>
                </Mobile>
              </>
            );
          })}
        </Row>
      </Container>

      <div className="product-middle-content-wrapper">
        {localState.data.middleContent.map((v) => {
          if (v.style === 'left-right') {
            return (
              <Container
                className="product-middle-content-item pt-5"
                key={v.id}
                fluid
                style={{ backgroundColor: v.backgroundColor }}
              >
                <Container>
                  <Row>
                    <Col className="content-wrapper pt-5" lg={6} xl={6} md={6} xs={12} sm={12}>
                      <Title level={2} className="font-weight-normal mb-0 content">
                        {v.title}
                      </Title>
                      {v.subTitle && (
                        <Title level={2} className="font-weight-normal mt-0 mb-4 content">
                          {v.subTitle}
                        </Title>
                      )}
                      <Title level={5} className="font-weight-light mt-0 content">
                        {v.description}
                      </Title>
                    </Col>
                    <BigScrren>
                      <Col lg={6} xl={6} md={6} xs={12} sm={12}>
                        <img className="img-wrapper" src={v.img} alt="" />
                      </Col>
                    </BigScrren>
                    <Tablet>
                      <Col lg={6} xl={6} md={6} xs={12} sm={12}>
                        <img className="img-wrapper" src={v.img} alt="" />
                      </Col>
                    </Tablet>
                    <Desktop>
                      <Col lg={6} xl={6} md={6} xs={12} sm={12}>
                        <img className="img-wrapper" src={v.img} alt="" />
                      </Col>
                    </Desktop>
                    <Mobile>
                      <Col lg={6} xl={6} md={6} xs={12} sm={12}>
                        <img className="img-wrapper mobile" src={v.img} alt="" />
                      </Col>
                    </Mobile>
                  </Row>
                </Container>
              </Container>
            );
          }

          if (v.style === 'right-left') {
            return (
              <Container
                className="product-middle-content-item"
                key={v.id}
                fluid
                style={{ backgroundColor: v.backgroundColor }}
              >
                <Container>
                  <Row>
                    <Col lg={6} xl={6} md={6} xs={12} sm={12}>
                      <img
                        className="img-wrapper mobile"
                        style={{ marginTop: '-80px', marginBottom: 'unset' }}
                        src={v.img}
                        alt=""
                      />
                    </Col>
                    <Col className="content-wrapper" lg={6} xl={6} md={6} xs={12} sm={12}>
                      <Title level={2} className="font-weight-normal mb-5 content">
                        {v.title}
                      </Title>
                      {v.subTitle && (
                        <Title level={2} className="font-weight-normal mt-0 mb-4 content">
                          {v.subTitle}
                        </Title>
                      )}
                      <Title level={5} className="font-weight-lighter mt-0 content mb-5">
                        {v.description}
                      </Title>
                    </Col>
                  </Row>
                </Container>
              </Container>
            );
          }

          return (
            <Container className="product-middle-content-item pt-5" fluid>
              <Container style={{ marginBottom: 100, marginTop: 50 }} key={v.id}>
                <Row>
                  <Col className="content-wrapper" lg={12} xl={12} md={12} xs={12} sm={12}>
                    <Title level={2} className="font-weight-normal mb-0 text-center">
                      {v.title}
                    </Title>
                    {v.subTitle && (
                      <Title level={2} className="font-weight-normal mt-0 mb-4 text-center">
                        {v.subTitle}
                      </Title>
                    )}
                    <BigScrren>
                      <div className="description-content text-center">
                        <Title level={5} className="font-weight-light mt-3 content-center">
                          {v.description}
                        </Title>
                      </div>
                    </BigScrren>
                    <Desktop>
                      <div className="description-content text-center">
                        <Title level={5} className="font-weight-light mt-3 content-center">
                          {v.description}
                        </Title>
                      </div>
                    </Desktop>
                    <Tablet>
                      <div className="description-content text-center">
                        <Title level={5} className="font-weight-light mt-3 content-center">
                          {v.description}
                        </Title>
                      </div>
                    </Tablet>

                    <Mobile>
                      <div className="description-content text-center">
                        <Title level={5} className="font-weight-light mt-3 content-center mobile">
                          {v.description}
                        </Title>
                      </div>
                    </Mobile>
                  </Col>
                </Row>
                <Row>
                  <Col className="middle-img-wrapper mt-5" lg={12} xl={12} md={12} xs={12} sm={12}>
                    <BigScrren>
                      <img className="middle-img" src={v.img} alt="" />
                    </BigScrren>
                    <Desktop>
                      <img className="middle-img" src={v.img} alt="" />
                    </Desktop>
                    <Tablet>
                      <img className="middle-img" src={v.img} alt="" />
                    </Tablet>
                    <Mobile>
                      <img className="middle-img mobile" src={v.img} alt="" />
                    </Mobile>
                  </Col>
                </Row>
              </Container>
            </Container>
          );
        })}
      </div>

      <Container fluid className="product-specification-wrapper">
        <Container>
          {localState.data.specifications.map((v, i) => {
            return (
              <Row className="product-specification-item-wrapper p-5 mb-5" key={v.id}>
                {i % 2 === 0 ? (
                  <>
                    <Col
                      className="content-wrapper mt-4"
                      lg={{ span: 6, order: 1 }}
                      md={{ span: 6, order: 1 }}
                      xl={{ span: 6, order: 1 }}
                      xs={{ span: 12, order: 12 }}
                      sm={{ span: 12, order: 12 }}
                    >
                      <Title level={2} className="font-weight-normal mb-0">
                        {v.name}
                      </Title>
                      {v.subName && (
                        <Title level={2} className="font-weight-normal mt-0">
                          {v.subName}
                        </Title>
                      )}
                      <Title level={5} className="font-weight-light">
                        {v.description}
                      </Title>
                    </Col>
                    <BigScrren>
                      <Col
                        className="img-wrapper mt-4"
                        lg={6}
                        md={6}
                        xl={6}
                        sm={{ span: 12, order: 1 }}
                        xs={{ span: 12, order: 1 }}
                      >
                        <img src={v.img} alt="" />
                      </Col>
                    </BigScrren>
                    <Desktop>
                      <Col
                        className="img-wrapper mt-4"
                        lg={6}
                        md={6}
                        xl={6}
                        sm={{ span: 12, order: 1 }}
                        xs={{ span: 12, order: 1 }}
                      >
                        <img src={v.img} alt="" />
                      </Col>
                    </Desktop>
                    <Tablet>
                      <Col
                        className="img-wrapper mt-4"
                        lg={6}
                        md={6}
                        xl={6}
                        sm={{ span: 12, order: 1 }}
                        xs={{ span: 12, order: 1 }}
                      >
                        <img src={v.img} alt="" />
                      </Col>
                    </Tablet>
                    <Mobile>
                      <Col
                        className="img-wrapper mobile mt-4"
                        lg={6}
                        md={6}
                        xl={6}
                        sm={{ span: 12, order: 1 }}
                        xs={{ span: 12, order: 1 }}
                      >
                        <img src={v.img} alt="" />
                      </Col>
                    </Mobile>
                  </>
                ) : (
                  <>
                    <BigScrren>
                      <Col className="img-wrapper mt-4" lg={6} md={6} xl={6} xs={12} sm={12}>
                        <img src={v.img} alt="" />
                      </Col>
                    </BigScrren>
                    <Desktop>
                      <Col className="img-wrapper mt-4" lg={6} md={6} xl={6} xs={12} sm={12}>
                        <img src={v.img} alt="" />
                      </Col>
                    </Desktop>
                    <Tablet>
                      <Col className="img-wrapper mt-4" lg={6} md={6} xl={6} xs={12} sm={12}>
                        <img src={v.img} alt="" />
                      </Col>
                    </Tablet>
                    <Mobile>
                      <Col className="img-wrapper mobile mt-4" lg={6} md={6} xl={6} xs={12} sm={12}>
                        <img src={v.img} alt="" />
                      </Col>
                    </Mobile>
                    <Col className="content-wrapper mt-4" lg={6} md={6} xl={6} xs={12} sm={12}>
                      <Title level={2} className="font-weight-normal mb-0">
                        {v.name}
                      </Title>
                      {v.subName && (
                        <Title level={2} className="font-weight-normal mt-0">
                          {v.subName}
                        </Title>
                      )}
                      <Title level={5} className="font-weight-light">
                        {v.description}
                      </Title>
                    </Col>
                  </>
                )}
              </Row>
            );
          })}

          <Row className="product-specification-guide-wrapper">
            <Col
              className="product-specification-guide-item mt-5"
              lg={6}
              xl={6}
              md={6}
              xs={12}
              sm={12}
            >
              <div className="img-wrapper">
                <div className="img-item">
                  <img src={icon3} alt="" />
                </div>
              </div>
              <div className="content-wrapper">
                <Title level={5} className="font-weight-normal mb-0 mt-0">
                  使用時間
                </Title>
                <Title level={5} className="font-weight-light mb-0 mt-0">
                  一般使用時間：24小時
                </Title>
                <Title level={5} className="font-weight-light mb-0 mt-0">
                  AirStream串流技術(電視盒/聲音訊號)：16小時
                </Title>
                <Title level={5} className="font-weight-light mb-0 mt-0">
                  藍牙™通話和音樂串流：11小時
                </Title>
              </div>
            </Col>

            <Col
              className="product-specification-guide-item mt-5"
              lg={6}
              xl={6}
              md={6}
              xs={12}
              sm={12}
            >
              <div className="img-wrapper">
                <div className="img-item">
                  <img src={icon4} alt="" />
                </div>
              </div>
              <div className="content-wrapper">
                <Title level={5} className="font-weight-normal mb-0 mt-0">
                  相容性資訊
                </Title>
                <Title level={5} className="font-weight-light mb-0 mt-0">
                  電話串流：相容於藍芽®4.2無線科技及大部分舊式藍芽®無線科技的手機。
                </Title>
                <Title level={5} className="font-weight-light mb-0 mt-0">
                  電視串流：需透過多媒體小盒子連結電視機。
                </Title>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="product-steps mt-5 mb-5">
        <div className="product-steps-title">
          <Title className="font-weight-normal mb-0 mt-0">
            HearGo專業助聽器
            <span className="orange">驗配服務</span>
          </Title>
        </div>
        <Row className="product-steps-detail-wrapper">
          {steps.map((v) => (
            <Col className="mt-5" xl={4} lg={4} md={4} xs={12} sm={12}>
              <div className="img-wrapper mb-3">
                <div className="img-item">
                  <img src={v.img} alt="" />
                </div>
              </div>
              <Title className="orange text-center font-weight-light mb-0 mt-0">{v.title}</Title>
              <Title level={5} className="font-weight-light mb-0 mt-0 text-center">
                {v.subTitle}
              </Title>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button className="btn-round">立即預約</Button>
        </div>

        <hr className="mt-5 mb-5" />
      </Container>

      <Container className="relevant-products mb-5">
        <Title level={3} className="text-center font-weight-normal mb-5 mt-0">
          同一產品其他型號
        </Title>

        <Row className="product-list mt-3">
          {ProductsList.map((v) => (
            <Col key={v.id} className="product-list-item mb-3" xl={4} lg={4} md={4} xs={12} sm={12}>
              <div className="product-list-item-wrapper p-5">
                <Title className="text-center font-weight-normal" level={5}>
                  {v.name}
                </Title>
                <Title className="text-center mt-0 font-weight-light" level={5}>
                  {v.subname}
                </Title>
                <img src={v.img} alt="" />
                <Title className="text-center font-weight-normal" level={5}>
                  {v.description}
                </Title>
                <Title className="text-center mt-0 font-weight-light" level={5}>
                  {v.subDescription}
                </Title>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
