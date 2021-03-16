import React from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

import { Feature } from "../../../components/Feature/Feature";

export const Features = ({ openLogin }) => {
  const { t } = useTranslation();

  const list = t("home.features.list", { returnObjects: true });
  const actionLinks = [
    "/services",
    "/services",
    "/about#team",
    "/services",
    "login",
  ];
  const buttonLinks = ["", "", "/contacts", "", "", ""];

  return (
    <section className="features">
      <h2 className="heading">
        <Trans components={[<span className="primary">word</span>]}>
          {t("home.features.heading")}
        </Trans>
      </h2>
      <div className="feature-list">
        {list.map((item, index) => {
          item.card["actionLink"] = actionLinks[index];
          item.card["buttonLink"] = buttonLinks[index];
          return (
            <Feature
              key={index}
              item={item}
              index={index}
              openLogin={openLogin}
            />
          );
        })}
      </div>
    </section>
  );
};
