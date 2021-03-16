import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

export const Feature = (props) => {
  const { i18n } = useTranslation();
  const asset = require.context('../../assets/images/home/', true);

  const { image, card } = props.item;
  const lang = i18n.language;
  const style = { backgroundImage: `url(${asset(image).default})` };
  const isLogin = card.actionLink === 'login';

  return (
    <div className={`feature-item feature-item-${props.index}`}>
      <div className={`feature-background feature-background-${props.index} ${lang}`}></div>
      <div className={`feature-image feature-image-${props.index}`} style={style}></div>
      <div className={`feature-card feature-card-${props.index} ${lang}`}>
        <div className="sign">
          <Trans components={[<span className="digit">word</span>]}>{card.sign}</Trans>
        </div>
        <h3 className="mt-4 mt-lg-3">{card.title}</h3>
        <p className="light mt-4 mt-lg-3">{card.text}</p>
        <div className="row m-0 mt-3">
          {card.button && (
            <HashLink to={card.buttonLink}>
              <Button variant="primary" className="btn-round mb-4">
                {card.button}
              </Button>
            </HashLink>
          )}
          {!isLogin && (
            <HashLink to={card.actionLink} onClick={() => window.scrollTo(0, 0)}>
              <div className="action">{card.action}</div>
            </HashLink>
          )}
          {isLogin && (
            <Link to="#" onClick={props.openLogin}>
              <div className="action">{card.action}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
