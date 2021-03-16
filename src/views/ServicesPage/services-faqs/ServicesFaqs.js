import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Accordion, AccordionContext } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { data } from './ServicesFaqsHelper';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <p className="question" onClick={decoratedOnClick}>
      {children}
      <span className="icon mx-3">{isCurrentEventKey ? <BiMinus /> : <BiPlus />}</span>
    </p>
  );
};

export const ServicesFaqs = () => {
  const { t } = useTranslation();

  return (
    <section id="faqs">
      <Container className="py-5">
        <Row noGutters={true}>
          <Col>
            <h2 className="text-center pb-5">{t(data.title)}</h2>
            <Accordion>
              {data.list.map((item) => {
                const isLast = item.id === data.list.length;
                return (
                  <div className="faq" key={item.id}>
                    <ContextAwareToggle eventKey={item.id}>{t(item.question)}</ContextAwareToggle>
                    <Accordion.Collapse eventKey={item.id}>
                      <p className="light">{t(item.answer)}</p>
                    </Accordion.Collapse>
                    {!isLast && <hr />}
                  </div>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
