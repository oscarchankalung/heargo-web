import React from 'react';
import { Desktop, Mobile, Tablet, BigScrren } from '../../../components/Responsive';
import { ServicesBannerDesktop } from './ServicesBanner.desktop';
import { ServicesBannerMobile } from './ServicesBanner.mobile';

export const ServicesBanner = () => {
  return (
    <section>
      <BigScrren>
        <ServicesBannerDesktop />
      </BigScrren>

      <Desktop>
        <ServicesBannerDesktop />
      </Desktop>

      <Tablet>
        <ServicesBannerMobile />
      </Tablet>

      <Mobile>
        <ServicesBannerMobile />
      </Mobile>
    </section>
  );
};
