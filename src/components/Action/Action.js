import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { useViewport } from '../useViewport/useViewport';

export const Action = (props) => {
  const { subtitle, title, text, button, link, image } = props.message;
  const asset = require.context('../../assets/images/home/', true);
  const { width, breakpoints } = useViewport();
  const isMedium = width < breakpoints.md;

  const style = {
    backgroundImage: `url(${asset(image).default})`
  };

  return (
    <div className={`${props.class}`} style={style}>
      {subtitle && <h4 className="subtitle mb-2">{subtitle}</h4>}
      <h3 className="title">
        {typeof title === 'string' ? title : isMedium ? title.medium : title.large}
      </h3>
      <p className="text mt-2">{text}</p>
      <Link to={link} onClick={() => window.scrollTo(0, 0)}>
        <Button variant="outline-white" className="btn-round">
          {button}
        </Button>
      </Link>
    </div>
  );
};
