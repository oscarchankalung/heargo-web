import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENT
import { Desktop, Mobile, BigScrren, Tablet } from '../../components/Responsive';

// STYLE
import './index.scss';

// IMAGE
import Logo from '../../assets/images/product/Hansaton-logo.png';
import MainProduct from '../../assets/images/product/Hansaton-main_product.png';
import LogoPhonak from '../../assets/images/product/Phonak-logo-removebg-preview.png';
import MainProductPhonak from '../../assets/images/product/phonak-virto-marvel-black-removebg-preview.png';

const { Title, Text } = Typography;

const ProductDetail = ({ logo, main, footer, customClassLogo, customClassMain }) => {
  return (
    <div className="product-detail">
      <BigScrren>
        <div className={`brand-logo ${customClassLogo}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`product-main-image mt-4 mb-4 ${customClassMain}`}>
          <img src={main} alt="" />
        </div>

        <div className="product-detail-footer text-center font-weight-lighter">{footer}</div>
      </BigScrren>

      <Desktop>
        <div className={`brand-logo ${customClassLogo}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`product-main-image mt-4 mb-4 ${customClassMain}`}>
          <img src={main} alt="" />
        </div>

        <div className="product-detail-footer text-center font-weight-lighter">{footer}</div>
      </Desktop>

      <Tablet>
        <div className={`brand-logo ${customClassLogo}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`product-main-image mt-4 mb-4 ${customClassMain}`}>
          <img src={main} alt="" />
        </div>

        <div className="product-detail-footer text-center font-weight-lighter">{footer}</div>
      </Tablet>

      <Mobile>
        <div className={`brand-logo mobile ${customClassLogo}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`product-main-image mobile mt-4 mb-4 ${customClassMain}`}>
          <img src={main} alt="" />
        </div>

        <div className="product-detail-footer text-center mobile font-weight-lighter">{footer}</div>
      </Mobile>
    </div>
  );
};

const ProductMask = ({ product, onClick }) => {
  const handleBtnClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  const content =
    '峰力擁有超過70年發展歷程，是專門從事高科技助聽器和FM無線調頻助聽產品研究、開發、生產與銷售的頂尖企業，是全球聽力行業的科技領導者。';

  const button = () => (
    <div
      onClick={handleBtnClick}
      className="btn btn-outline-primary btn-round mt-5 mb-0 custom-btn"
    >
      了解{product}
    </div>
  );

  return (
    <div className="product-mask">
      <BigScrren>
        <div className="title-wrapper">
          <Text className="title font-weight-normal">{content}</Text>
        </div>
        {button()}
      </BigScrren>

      <Desktop>
        <div className="title-wrapper">
          <Text className="title font-weight-normal">{content}</Text>
        </div>
        {button()}
      </Desktop>

      <Tablet>
        <div className="title-wrapper">
          <Text className="title font-weight-normal">{content}</Text>
        </div>
        {button()}
      </Tablet>

      <Mobile>
        <div className="title-wrapper mobile">
          <Text className="title font-weight-normal mobile">{content}</Text>
        </div>
        {button()}
      </Mobile>
    </div>
  );
};

const ProductsPage = () => {
  const history = useHistory();

  const handleClickProductMask = () => {
    return history.push('/brand_detail');
  };

  return (
    <div className="products-page pb-3">
      <Container className="mt-5">
        <Row>
          <Col>
            <Text className="semi-title font-weight-light gunmetal">助聽器品牌</Text>
            <Title className="title font-weight-normal mt-2">
              最優質的
              <span className="orange">助聽器</span>
            </Title>
          </Col>
        </Row>
      </Container>
      <Container className="products-category" fluid>
        <Row className="product-row">
          <BigScrren>
            <Col className="product-col mt-5" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="HANSATON" onClick={handleClickProductMask} />
              <ProductDetail
                logo={Logo}
                main={MainProduct}
                footer={
                  <>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      AQ sound XC pro R 充電微型款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      Sound XC pro R 電池款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      AQ jam XC pro R 充電標準款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      Jam SHD RS13 入門款
                    </Title>
                  </>
                }
              />
            </Col>
            <Col className="product-col mt-5" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="PHONAK" />
              <ProductDetail
                logo={LogoPhonak}
                main={MainProductPhonak}
                customClassLogo="phonak-logo"
                customClassMain="phonak-product"
                footer={
                  <>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      VirtoTM Marvel 耳內式
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      NaidaTM Marvel 強力型
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      CROS Belong 單側聽損使用
                    </Title>
                  </>
                }
              />
            </Col>
          </BigScrren>

          <Desktop>
            <Col className="product-col mt-5" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="HANSATON" onClick={handleClickProductMask} />
              <ProductDetail
                logo={Logo}
                main={MainProduct}
                footer={
                  <>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      AQ sound XC pro R 充電微型款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      Sound XC pro R 電池款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      AQ jam XC pro R 充電標準款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      Jam SHD RS13 入門款
                    </Title>
                  </>
                }
              />
            </Col>
            <Col className="product-col mt-5" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="PHONAK" />
              <ProductDetail
                logo={LogoPhonak}
                main={MainProductPhonak}
                customClassLogo="phonak-logo"
                customClassMain="phonak-product"
                footer={
                  <>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      VirtoTM Marvel 耳內式
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      NaidaTM Marvel 強力型
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      CROS Belong 單側聽損使用
                    </Title>
                  </>
                }
              />
            </Col>
          </Desktop>

          <Tablet>
            <Col className="product-col mt-5" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="HANSATON" onClick={handleClickProductMask} />
              <ProductDetail
                logo={Logo}
                main={MainProduct}
                footer={
                  <>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      AQ sound XC pro R 充電微型款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      Sound XC pro R 電池款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      AQ jam XC pro R 充電標準款
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      Jam SHD RS13 入門款
                    </Title>
                  </>
                }
              />
            </Col>
            <Col className="product-col mt-5" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="PHONAK" />
              <ProductDetail
                logo={LogoPhonak}
                main={MainProductPhonak}
                customClassLogo="phonak-logo"
                customClassMain="phonak-product"
                footer={
                  <>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      VirtoTM Marvel 耳內式
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      NaidaTM Marvel 強力型
                    </Title>
                    <Title className="gunmetal title-product font-weight-normal" level={5}>
                      CROS Belong 單側聽損使用
                    </Title>
                  </>
                }
              />
            </Col>
          </Tablet>

          <Mobile>
            <Col className="product-col mt-3 mobile" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="HANSATON" onClick={handleClickProductMask} />
              <ProductDetail
                logo={Logo}
                main={MainProduct}
                footer={
                  <>
                    <Title className="gunmetal title-product mobile font-weight-normal" level={5}>
                      AQ sound XC pro R 充電微型款
                    </Title>
                    <Title className="gunmetal title-product mobile font-weight-normal" level={5}>
                      Sound XC pro R 電池款
                    </Title>
                    <Title className="gunmetal title-product mobile font-weight-normal" level={5}>
                      AQ jam XC pro R 充電標準款
                    </Title>
                    <Title className="gunmetal title-product mobile font-weight-normal" level={5}>
                      Jam SHD RS13 入門款
                    </Title>
                  </>
                }
              />
            </Col>
            <Col className="product-col mt-3 mobile" xl={6} lg={6} md={6} xs={12} sm={12}>
              <ProductMask product="PHONAK" />
              <ProductDetail
                logo={LogoPhonak}
                main={MainProductPhonak}
                customClassLogo="phonak-logo"
                customClassMain="phonak-product"
                footer={
                  <>
                    <Title className="gunmetal title-product mobile font-weight-normal" level={5}>
                      VirtoTM Marvel 耳內式
                    </Title>
                    <Title className="gunmetal title-product mobile font-weight-normal" level={5}>
                      NaidaTM Marvel 強力型
                    </Title>
                    <Title className="gunmetal title-product mobile font-weight-normal" level={5}>
                      CROS Belong 單側聽損使用
                    </Title>
                  </>
                }
              />
            </Col>
          </Mobile>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsPage;
