import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { TopBanner } from "../top-banner/TopBanner"
import { Link } from "react-router-dom";

import articleImage1 from "../../../assets/images/knowledge/article-2.jpg"
import articleImage2 from "../../../assets/images/knowledge/article-3.jpg"

export const KnowledgeArticleList = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <TopBanner />
      <div className="article-section">
        <Container>
          <Row>
            <Col sm={6}>
              <Card>
                <Card.Img variant="top" src={articleImage1} />
                <Card.Body>
                  <Card.Title>如何知道自己患上聽障？六大聽障徵兆</Card.Title>
                  <Card.Text>在香港，平均每3個年滿65歲以上的人當中，就有1個人患有聽力障礙。一般來說，聽力障礙的風險會隨著年齡顯著增加。研究顯示，本港...
                  </Card.Text>
                  <Link to="/knowledge/1" >
                    <span className="article-more">閱讀更多</span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card>
                <Card.Img variant="top" src={articleImage2} />
                <Card.Body>
                  <Card.Title>如何挑選適合的助聽器？</Card.Title>
                  <Card.Text>在一般建議你根據生活習慣、預算及需求選擇，考慮不同助聽器的功能。聽力專家會根據你的年紀、手指靈活程度、耳朵健康狀況、聽力程度、對助聽器外型的喜好、生活習慣等...
                  </Card.Text>
                  <Link to="/knowledge/2" >
                    <span className="article-more">閱讀更多</span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card>
                <Card.Img variant="top" src={articleImage2} />
                <Card.Body>
                  <Card.Title>如何挑選適合的助聽器？</Card.Title>
                  <Card.Text>在一般建議你根據生活習慣、預算及需求選擇，考慮不同助聽器的功能。聽力專家會根據你的年紀、手指靈活程度、耳朵健康狀況、聽力程度、對助聽器外型的喜好、生活習慣等...
                  </Card.Text>
                  <Link to="/knowledge/2" >
                    <span className="article-more">閱讀更多</span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};