import React from 'react';

import { ServicesBanner } from './services-banner/ServicesBanner';
import { ServicesSuitable } from './services-suitable/ServicesSuitable';
import { ServicesWhy } from './services-why/ServicesWhy';
import { ServicesTypes } from './services-types/ServicesTypes';
import { ServicesPricing } from './services-pricing/ServicesPricing';
import { ServicesConsult } from './services-consult/ServicesConsult';
import { ServicesBooking } from './services-booking/ServicesBooking';
import { ServicesPayments } from './services-payments/ServicesPayments';
import { ServicesFaqs } from './services-faqs/ServicesFaqs';
import { ServicesContact } from './services-contact/ServicesContact';

export const ServicesPage = () => {
  return (
    <main>
      <ServicesBanner />
      <ServicesSuitable />
      <ServicesWhy />
      <ServicesTypes />
      <ServicesPricing />
      <ServicesConsult />
      <ServicesBooking />
      <ServicesPayments />
      <ServicesFaqs />
      <ServicesContact />
    </main>
  );
};
