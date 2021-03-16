import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENT
import { Typography } from 'antd';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Desktop, Mobile, Tablet, BigScrren } from '../../components/Responsive';

import { data } from './data';

import './index.scss';

const { Title } = Typography;

const AccessoriesPage = () => {
  const [localState, setLocalState] = useState({
    data: null
  });

  const { product_id } = useParams();

  useEffect(() => {
    const productDetail = data.find((v) => v.id === Number(product_id));

    setLocalState({ data: productDetail });
  }, [product_id]);

  if (!localState.data) return null;

  const renderCategories = (products) => {
    const productsLength = products.length;
    const arrComponent = [];
    let childComponent = [];

    for (let i = 0; i < productsLength; i++) {
      if (i % 3 === 0) {
        childComponent = [];

        arrComponent.push(
          <Row key={i} className="product-list-wrapper">
            {childComponent}
          </Row>
        );

        childComponent.push(
          <Col
            key={i}
            xl={{ span: 4 }}
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <div className="accessory-wrapper text-center">
              <img src={products[i].img} alt="" />
              <Title level={5} className="font-weight-normal text-center mb-0 mt-5">
                {products[i].title}
              </Title>
              {products[i].subTitle && (
                <Title level={5} className="font-weight-normal text-center mb-0 mt-2">
                  {products[i].subTitle}
                </Title>
              )}
              <Title level={5} className="font-weight-light text-center mt-2 mb-5">
                {products[i].description}
              </Title>
            </div>
          </Col>
        );
      } else {
        childComponent.push(
          <Col
            key={i}
            xl={{ span: 4 }}
            lg={{ span: 4 }}
            md={{ span: 4 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <div className="accessory-wrapper text-center">
              <img src={products[i].img} alt="" />
              <Title level={5} className="font-weight-normal text-center mb-0 mt-5">
                {products[i].title}
              </Title>
              {products[i].subTitle && (
                <Title level={5} className="font-weight-normal text-center mb-0 mt-2">
                  {products[i].subTitle}
                </Title>
              )}
              <Title level={5} className="font-weight-light text-center mt-2 mb-5">
                {products[i].description}
              </Title>
            </div>
          </Col>
        );
      }
    }

    return arrComponent;
  };

  return (
    <Container className="accessories-page">
      <Title level={5} className="font-weight-light">
        {localState.data.subTitle}
      </Title>
      <Title className="font-weight-normal mt-0 mb-5">{localState.data.title}</Title>

      <div
        className="banner-wrapper mb-5"
        style={{ backgroundImage: `url(${localState.data.banner})` }}
      />

      {localState.data.categories.map((v) => (
        <div key={v.id} className="mb-5">
          <Title level={2} className="text-center font-weight-normal mt-0 mb-5">
            {v.title}
          </Title>
          {renderCategories(v.products)}
        </div>
      ))}
    </Container>
  );
};

export default AccessoriesPage;
