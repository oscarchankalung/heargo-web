import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const AboutNav = (props) => {
  const { data, id } = props;
  const location = useLocation();

  return (
    <section id={id}>
      <Nav variant="pills" defaultActiveKey="/about">
        {data.links.map((link, index) => (
          <Nav.Item key={index} className="mx-1">
            <Link
              to={`/about${link.hash}`}
              className={`nav-link ${location.hash === link.hash && "active"}`}
            >
              {link.name}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </section>
  );
};
