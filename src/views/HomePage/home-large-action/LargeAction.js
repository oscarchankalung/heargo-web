import React from "react";
import { useTranslation } from "react-i18next";

import { Action } from "../../../components/Action/Action";

export const LargeAction = () => {
  const { t } = useTranslation();

  const item = t("home.largeAction", { returnObjects: true });
  item.link = "/contacts";
  return (
    <section className="large-action-container">
      <Action message={item} class="large-action" />
    </section>
  );
};
