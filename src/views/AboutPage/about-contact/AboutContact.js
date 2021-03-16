import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Trans } from "react-i18next";

import { useViewport } from "../../../components/useViewport/useViewport";

export const AboutContact = (props) => {
  const { data, asset, id } = props;
  const { width, breakpoints } = useViewport();
  const isMobile = width <= breakpoints.md;

  return <section id={id}>{id}</section>;
};
