import React from "react";
import { useTranslation } from "react-i18next";
import { Action } from "../../../components/Action/Action";

export const SmallActions = () => {
  const { t } = useTranslation();
  const list = t("home.smallActions", { returnObjects: true });
  const links = ["/booking", "/contacts"];

  return (
    <section className="small-action-container">
      {list.map((item, index) => {
        item.link = links[index];
        return <Action key={index} message={item} class="small-action" />;
      })}
    </section>
  );
};
