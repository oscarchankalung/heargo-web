import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { KnowledgeArticleList } from "./knowledge-article-list/KnowledgeArticleList"
import { KnowledgeArticle1 } from "./knowledge-article-list/KnowledgeArticle1"
import { KnowledgeArticle2 } from "./knowledge-article-list/KnowledgeArticle2"
import { BottomServices } from "./bottom-services/BottomServices"
import { Switch, Redirect, Route } from "react-router";


export const KnowledgePage = () => {
  const { t } = useTranslation()
  
  return (
    <div className="knowledge">
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/knowledge"
            to="/knowledge/list"
          />
        }
        <Route path="/knowledge/list" component={KnowledgeArticleList} />
        <Route path="/knowledge/1" component={KnowledgeArticle1} />
        <Route path="/knowledge/2" component={KnowledgeArticle2} />
        <Redirect to="/error" />
      </Switch>
      <BottomServices />
    </div>
  );
};
