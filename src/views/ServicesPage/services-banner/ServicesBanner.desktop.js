import React from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

export const ServicesBannerDesktop = () => {
  const { t } = useTranslation();
  const asset = require.context('../../../assets/images/services/', true);

  const data = {
    title: 'services.banner.title',
    slogan: 'services.banner.slogan',
    content: 'services.banner.content',
    image: 'services.banner.image'
  };

  return (
    <div className="topbanner-desktop">
      <div className="topbanner-desktop-section">
        <img src={asset(t(data.image)).default} className="topbanner-desktop-image" alt="" />
        <div className="topbanner-desktop-content">
          <p className="topbanner-desktop-typo font-weight-lighter">{t(data.title)}</p>
          <h2 className="topbanner-desktop-typo mt-3 mb-3 font-weight-normal">
            <Trans components={[<span className="primary">word</span>]}>{t(data.slogan)}</Trans>
          </h2>
          <p className="font-weight-lighter">{t(data.content)}</p>
        </div>
      </div>
    </div>
  );
};
