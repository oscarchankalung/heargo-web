import React from 'react';

import { HomeCarousel } from './home-carousel/HomeCarousel';
import { SmallActions } from './home-small-actions/SmallActions';
import { Features } from './home-features/Features';
import { HomeServices } from './home-services/HomeServices';
import { HomeProducts } from './home-products/HomeProducts';
import { LargeAction } from './home-large-action/LargeAction';

export const HomePage = ({ openLogin }) => {
  return (
    <main>
      <HomeCarousel></HomeCarousel>
      <SmallActions></SmallActions>
      <Features openLogin={openLogin}></Features>
      <HomeServices></HomeServices>
      <HomeProducts></HomeProducts>
      <LargeAction></LargeAction>
      {/* ContactForm */}
    </main>
  );
};
