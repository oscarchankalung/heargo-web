import React from "react";
import { unflatten } from "flat";
import { useTranslation } from "react-i18next";

import { AboutStory } from "./about-story/AboutStory";
import { AboutNav } from "./about-nav/AboutNav";
import { AboutMission } from "./about-mission/AboutMission";
import { AboutTeam } from "./about-team/AboutTeam";
import { AboutValues } from "./about-values/AboutValues";
// import { AboutContact } from "./about-contact/AboutContact";
import { AboutJoin } from "./about-join/AboutJoin";
import { AboutNews } from "./about-news/AboutNews";

export const AboutPage = () => {
  const { t } = useTranslation();
  const asset = require.context("../../assets/images/about/", true);
  const data = unflatten(t("about", { returnObjects: true }));

  // AboutNav
  const hashs = ["mission", "team", "values", "contact", "news"];
  data.nav.links = hashs.map((hash, index) => {
    return {
      name: data.nav.links[index],
      hash: `#${hash}`,
    };
  });

  // AboutValues
  const positions = ["full", "right", "left"];
  positions.forEach((position, index) => {
    data.values.list[index].position = position;
  });

  return (
    <main>
      <AboutStory data={data.story} asset={asset} id="story"></AboutStory>
      <AboutNav data={data.nav} asset={asset} id="nav"></AboutNav>
      <AboutMission
        data={data.mission}
        asset={asset}
        id="mission"
      ></AboutMission>
      <AboutTeam data={data.team} asset={asset} id="team"></AboutTeam>
      <AboutValues data={data.values} asset={asset} id="values"></AboutValues>
      {/* ContactForm */}
      <AboutJoin data={data.join} asset={asset} id="join"></AboutJoin>
      <AboutNews data={data.news} asset={asset} id="news"></AboutNews>
    </main>
  );
};
