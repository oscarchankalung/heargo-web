import React from "react";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const KnowledgeArticle1 = () => {
  return (
    <>
      <div className="top-banner">
        <Link to="/knowledge">
          <Button className="btn-circle">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          回列表
        </Link>
        <div className="pt-5">
          <span className="white">助聽器指南</span>
          <h1 className="white">如何知道自己患上聽障？六大聽障徵兆</h1>
        </div>
      </div>
      <div className="article-section">
        <div className="content">
          <div>
            <p>
              在香港，平均每3個年滿65歲以上的人當中，就有1個人患有聽力障礙。一般來說，聽力障礙的風險會隨著年齡顯著增加。
            </p>
            <p>
              研究顯示，本港60-69歲人口中有7.6%受聽力障礙影響，70歲以上人口更達14.2%。因此，聽力問題不容忽視，尤其60歲以上人士更要特別留意自己的聽力健康。
            </p>

            <h5>六大聽障徵兆</h5>
            <p>
              聽力障礙一般都是逐漸形成的，一開始徵狀輕微，不容易察覺。以下是6大最常見的聽障徵兆：{" "}
            </p>
            <ol>
              <li>看電視、聽音樂時經常需要調高音量</li>
              <li>在餐廳、酒樓等地方談話感到困難 </li>
              <li>聽電話時難以聽清楚內容</li>
              <li>經常需要別人重複說話</li>
              <li>家人抱怨你不聽他們說話</li>
              <li>覺得別人說話不清楚</li>
            </ol>
            <p>
              聽覺是與人溝通以至日常生活的重要一環，及早正視問題可有效減低聽障對生活的影響。
            </p>

            <h5>延遲求覆，影響倍增</h5>
            <p>
              研究指出聽障者平均拖延長達7年才接受助聽器。遇上聽力問題置之不理，有機會對生理、心理做成嚴重影響：{" "}
            </p>
            <ol>
              <li>影響日常溝通及人際關係，更為生活帶來不便</li>
              <li>
                容易疲倦-由於聽力下降，你的身體會嘗試作出補償，令你感到疲倦
              </li>
              <li>認知能力下降</li>
              <li>感到迷惘、難以集中、注意力下降、自尊心下降 </li>
              <li>影響心理質素</li>
              <li>
                感到寂寞、孤單、沮喪、憂鬱、焦慮、憤怒、尷尬、抽離社交圈子
              </li>
              <li>生活質素下降</li>
            </ol>

            <h5>一旦患上聽障，接受治療有機會康復嗎？</h5>
            <p>
              若你懷疑自己患有聽障，你應該盡快求診，讓聽力專家為你進行聽力檢測。雖然大部分聽障都無法治癒，但專家會評估你的聽力程度、聽障類別及成因提出適合的解決方案，減低聽障對生活的影響。
            </p>
          </div>
        </div>
        <Link to="/booking">
          <Button className="btn-round mb-5">立即預約在家聽力測試</Button>
        </Link>
      </div>
    </>
  );
};
