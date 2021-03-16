import React from 'react';

// COMPONENT
import { Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Desktop, Mobile, BigScrren, Tablet } from '../../components/Responsive';

// IMAGE
import Logo from '../../assets/images/product/Hansaton-logo.png';
import productImg1 from '../../assets/images/product/AQ_sound_XC_Pro_RT_XitingRed_Dome_persp-removebg-preview.png';
import productImg2 from '../../assets/images/product/AQsoundXCProR_ExcitingRed_Dome_persp.png';
import productImg3 from '../../assets/images/product/AQsoundXCProR_ExcitingRed_Dome_persp.png';
import productImg4 from '../../assets/images/product/AQsoundXCProR_CarbonBlack_Dome_persp.png';

import './index.scss';

const { Title } = Typography;

const ProductsList = [
  {
    id: 0,
    name: 'Sound XC pro R',
    subname: '微型電池款 312',
    img: productImg1,
    description: '細小體積，強大連接',
    subDescription: '適合輕度至中度嚴重聽損程度'
  },
  {
    id: 1,
    name: 'AQ sound XC pro R',
    subname: '微型充電款Li-ion',
    img: productImg2,
    description: '短時間充電 x 長時間使用',
    subDescription: '適合輕度至中度嚴重聽損程度'
  },
  {
    id: 2,
    name: 'AQ jam XC pro RT',
    subname: '標準充電款Li-ion',
    img: productImg3,
    description: '適合手指靈活度低，操作實用型',
    subDescription: '適合中度嚴重至嚴重聽損程度 '
  }
];

const ShdProductsList = [
  {
    id: 0,
    name: 'jam SHD RS13',
    subname: '微型充電款Li-ion',
    img: productImg4,
    description: '可靠耐用',
    subDescription: ['IP68防水防塵認證', '適合中度嚴重至嚴重聽損程度', '(90dB loss)']
  }
];

const questions = [
  '哪款助聽器適合老人家使用？',
  '購買助聽器需要收取額外服務費嗎？',
  '請問HearGo出售的助聽器是全新的嗎？',
  '我可以試戴多於一款的助聽器嗎？',
  '我需要使用助聽器耳模嗎？'
];

const BrandDetail = () => {
  return (
    <div className="brand-detail-page">
      <Container className="mt-5">
        <Row>
          <Col>
            <img src={Logo} alt="" />
            <Title className="font-weight-normal mb-0 mt-3">德國漢莎通助聽器</Title>
          </Col>
        </Row>
        <Row className="main-brand-detail-img mt-5 mb-5">
          <Desktop>
            <div className="card-wrapper">
              <div className="card-content-wrapper p-4">
                <div className="card-content">
                  <Title className="font-weight-normal" level={5}>
                    精彩生活 隨心所欲 就是Pro
                  </Title>
                  <Title className="font-weight-light mt-0" level={5}>
                    準備好為您的人生增添精彩－EXCITE Pro 新世代助聽技術
                  </Title>
                </div>
                <div className="arrow-icon-wrapper">
                  <RightOutlined className="text-white" />
                </div>
              </div>
            </div>
          </Desktop>

          <BigScrren>
            <div className="card-wrapper">
              <div className="card-content-wrapper p-4">
                <div className="card-content">
                  <Title className="font-weight-normal" level={5}>
                    精彩生活 隨心所欲 就是Pro
                  </Title>
                  <Title className="font-weight-light mt-0" level={5}>
                    準備好為您的人生增添精彩－EXCITE Pro 新世代助聽技術
                  </Title>
                </div>
                <div className="arrow-icon-wrapper">
                  <RightOutlined className="text-white" />
                </div>
              </div>
            </div>
          </BigScrren>

          <Tablet>
            <div className="card-wrapper">
              <div className="card-content-wrapper p-4">
                <div className="card-content">
                  <Title className="font-weight-normal" level={5}>
                    精彩生活 隨心所欲 就是Pro
                  </Title>
                  <Title className="font-weight-light mt-0" level={5}>
                    準備好為您的人生增添精彩－EXCITE Pro 新世代助聽技術
                  </Title>
                </div>
                <div className="arrow-icon-wrapper">
                  <RightOutlined className="text-white" />
                </div>
              </div>
            </div>
          </Tablet>

          <Mobile>
            <div className="card-wrapper mobile">
              <div className="card-content-wrapper p-4">
                <div className="card-content">
                  <Title className="font-weight-normal" level={5}>
                    精彩生活 隨心所欲 就是Pro
                  </Title>
                  <Title className="font-weight-light mt-0" level={5}>
                    準備好為您的人生增添精彩－EXCITE Pro 新世代助聽技術
                  </Title>
                </div>
                <div className="arrow-icon-wrapper">
                  <RightOutlined className="text-white" />
                </div>
              </div>
            </div>
          </Mobile>
        </Row>
        <Row className="product-story mb-5">
          <Col className="img" lg={6} xl={6} md={6} xs={12} sm={12} />
          <Col className="p-5 content" lg={6} xl={6} md={6} xs={12} sm={12}>
            <Title className="text-center font-weight-normal">德國品牌 始於1957</Title>
            <Title level={5} className="font-weight-light text-justify">
              Hansaton的全球總部位於德國漢堡南部，並設有近2700平方米的製造工廠，目前在全球超過70個國家供應產品。
            </Title>
            <Title level={5} className="font-weight-light text-justify">
              自1957年以來，Hansaton始終致力於提供高品質的聽力產品和附件，採用創新技術和出色的設計，以幫助世界各地的人們獲得更多更好的聽覺體驗和更好的生活質量。
            </Title>
          </Col>
        </Row>
        <Title level={4} className="orange text-center">
          產品列表
        </Title>
        <Title level={3} className="text-center mt-0">
          Excite Pro
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
        <Title level={3} className="text-center mt-5">
          SHD
        </Title>
        <Row className="product-list mb-5 mt-3">
          {ShdProductsList.map((v) => (
            <Col
              key={v.id}
              className="product-list-item"
              xl={{ offset: 4, span: 4 }}
              lg={{ offset: 4, span: 4 }}
              md={{ offset: 4, span: 4 }}
              xs={12}
              sm={12}
            >
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
                {v.subDescription.map((d, i) => (
                  <Title key={i} className="text-center font-weight-light mt-0" level={5}>
                    {d}
                  </Title>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="qa-wrapper pt-5 pb-5">
        <Container>
          <Title level={5} className="font-weight-light text-center">
            常見問題
          </Title>

          <Title level={2} className="font-weight-normal text-center mt-0 mb-5">
            購買前的注意事項
          </Title>
          {questions.map((q, i) => (
            <>
              <Title key={i} level={5} className="font-weight-normal">
                {q}
              </Title>
              <hr />
            </>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default BrandDetail;
