import React from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

export const ServicesBannerMobile = () => {
  const { t } = useTranslation();

  const data = {
    title: 'services.banner.title',
    slogan: 'services.banner.slogan',
    content: 'services.banner.content',
    image: 'services.banner.image'
  };

  return (
    <div className="topbanner-mobile">
      <div className="topbanner-mobile-section">
        <div className="topbanner-mobile-content">
          <p className="topbanner-mobile-typo font-weight-lighter">{t(data.title)}</p>
          <h2 className="topbanner-mobile-typo mt-3 mb-3 font-weight-normal">
            <Trans components={[<span className="primary">word</span>]}>{t(data.slogan)}</Trans>
          </h2>
          <p className="font-weight-lighter">{t(data.content)}</p>
        </div>
      </div>
    </div>
  );
};
