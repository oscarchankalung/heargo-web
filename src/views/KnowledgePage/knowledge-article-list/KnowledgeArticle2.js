import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export const KnowledgeArticle2 = () => {
  
return (
    <>
      <div className="top-banner">
        <Link to="/knowledge">
          <Button className="btn-circle"><FontAwesomeIcon icon={faAngleLeft} /></Button>回列表
        </Link>
        <div className="pt-5">
            <span className="white">如何選配助聽器 </span>
            <h1 className="white">如何挑選適合的助聽器？</h1>
        </div>
      </div>
      <div className="article-section">
        <div className="content">
          <div>
            <p>一般建議你根據生活習慣、預算及需求選擇，考慮不同助聽器的功能。聽力專家會根據你的年紀、手指靈活程度、耳朵健康狀況、聽力程度、對助聽器外型的喜好、生活習慣等，幫助你選擇最適合自己的助聽器類型。</p>
            <p></p>

            <h5>考慮自己的聽力程度</h5>
            <p>聽障輕微的一般有較多選擇，而聽障較嚴重的人士或需考慮較強力的助聽器</p>
            <h5>考慮手指靈活度及視力程度</h5>
            <p>體積大的助聽器一般較容易操作，適合手指不靈活、有老花等視力問題的人士</p>
            <h5>考慮耳形及耳朵結構</h5>
            <p>如果你的耳形較小，內耳式的助聽器可能較適合你；內耳較小的話，耳背式的助聽器戴起來會更舒適</p>
            <h5>考慮生活需要</h5>
            <p>今時今日，助聽器的功能五花八門，但未必所有功能都適合你。挑選功能時，你應考慮自己日常生活的環境及活動需要，例如：你通常留在室內與家人、朋友對話，或是經常外出到環境較嘈吵的地方活動，選擇相應的功能。一般功能包括：</p>
            <ul>
              <li>充電式電池</li>
              <li>特強降嘈功能</li>
              <li>連接智能電話</li>
              <li>自動調節音量</li>
              <li>藍牙連接裝置</li>
            </ul>
          </div>
        </div>
        <Link to="/booking">
          <Button className="btn-round mb-5">立即預約在家聽力測試</Button>
        </Link>
      </div>
    </>
    );
};