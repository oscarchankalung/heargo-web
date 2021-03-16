import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

export const ServicesWhy = () => {
  const { t } = useTranslation();
  const asset = require.context('../../../assets/images/services/', true);

  const data = {
    title: 'services.why.title',
    list: [
      {
        id: 0,
        icon: 'services.why.professional_icon',
        title: 'services.why.professional_title',
        content: 'services.why.professional_content'
      },
      {
        id: 1,
        icon: 'services.why.safe_icon',
        title: 'services.why.safe_title',
        content: 'services.why.safe_content'
      },
      {
        id: 2,
        icon: 'services.why.trial_icon',
        title: 'services.why.trial_title',
        content: 'services.why.trial_content'
      }
    ]
  };

  return (
    <section id="why">
      <div className="reason-bg pt-5">
        <h2 className="text-center mb-5">
          <Trans components={[<span className="primary">word</span>]}>{t(data.title)}</Trans>
        </h2>
        <Container>
          <Row>
            {data.list.map((item) => {
              return (
                <Col className="con-wrapper my-3 my-md-0" md={4} key={item.id}>
                  <div className="con">
                    <img className="icon" src={asset(t(item.icon)).default} alt="" />
                    <p className="orange tit mt-3">{t(item.title)}</p>
                    <p className="tit light-font font-weight-light">{t(item.content)}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};
