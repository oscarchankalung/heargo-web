import React from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const TopBanner = () => {

  const { t } = useTranslation()
  
  return (
  <div className="top-banner">
    <div>
        <h1>{t("knowledge.title")}</h1>
        <span>{t("knowledge.subtitle")}</span>
    </div>
    <Form.Group controlId="category">
        <Form.Control 
            as="select" 
            name="category" >
                <option value="0">- {t("knowledge.all_article")} -</option>
                <option value="1">{t("knowledge.what_is_hearing_impairment")}</option>
                <option value="2">{t("knowledge.choose_hearing_aid")}</option>
                <option value="3">{t("knowledge.user_guide")}</option>
                <option value="4">{t("knowledge.maintenance")}</option>
                <option value="5">{t("knowledge.connect_accessories")}</option>
        </Form.Control>
    </Form.Group>

  </div>);
};