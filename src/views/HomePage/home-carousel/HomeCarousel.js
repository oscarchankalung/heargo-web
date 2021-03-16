import React from 'react';
import { Carousel } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useViewport } from '../../../components/useViewport/useViewport';

export const HomeCarousel = () => {
  const { t } = useTranslation();
  const { width, breakpoints } = useViewport();
  const isMobile = width < breakpoints.sm;
  const suffix = isMobile ? 'mobile' : 'desktop';
  const asset = require.context('../../../assets/images/home/', true);

  const data = [
    {
      image: `1_image_${suffix}`,
      testimonial: {
        title: '1_testimonial_title',
        text: '1_testimonial_text',
        icon: '1_testimonial_icon',
        link: '/knowledge'
      }
    },
    {
      image: `2_image_${suffix}`
    },
    {
      image: `3_image_${suffix}`
    }
  ];

  return (
    <section className="home-carousel">
      <Carousel
        interval={5000}
        keyboard={false}
        controls={isMobile ? false : true}
        indicators={isMobile ? true : false}
      >
        {data.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className={`background background-${index}`}
                alt={`banner-${index}`}
                src={asset(t(`home.carousels.${item.image}`)).default}
              ></img>
              {/* <Carousel.Caption>
                {item.testimonial && (
                  <div className="testimonial mt-auto">
                    <h3 className="title mb-2 mb-md-3">
                      {t(`home.carousels.${item.testimonial.title}`)}
                    </h3>
                    <p className="text">
                      {t(`home.carousels.${item.testimonial.text}`)}
                    </p>
                    <div>
                      <Link
                        to={item.testimonial.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <img
                          className="icon"
                          src={
                            asset(t(`home.carousels.${item.testimonial.icon}`))
                              .default
                          }
                          alt="icon"
                        ></img>
                      </Link>
                    </div>
                  </div>
                )}
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};
