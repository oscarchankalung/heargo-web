import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiPhone } from 'react-icons/fi';
import { useViewport } from '../useViewport/useViewport';

import { about, products } from './NavigationBarHelper';
import { NavigationDropdown } from './NavigationDropdown/NavigationDropdown';
import * as request from '../../api/member';

import logoOriginal from '../../assets/images/logo_original.svg';
import logoName from '../../assets/images/logo_name.svg';

export const NavigationBar = ({ openLogin, authToken }) => {
  const { t, i18n } = useTranslation();
  const { width, breakpoints } = useViewport();
  const isMobile = width < breakpoints.xl;
  const [navbar, setNavbar] = useState(false);
  const [name, setName] = useState('');
  const lng = localStorage.getItem('lng');

  useEffect(() => {
    if (authToken) {
      request
        .fetchMember()
        .then(({ data }) => {
          setName(data.firstname);
        })
        .catch((err) => console.log(err));
    }
  }, [authToken]);

  const changeLanguage = (lng) => {
    localStorage.setItem('lng', lng);
    i18n.changeLanguage(lng);
  };

  const toggleNavbar = () => {
    if (isMobile) {
      setNavbar(!navbar);
    }
  };
  function collapseNavbar() {
    setNavbar(false);
  }
  useEffect(() => {
    if (!isMobile && navbar) {
      setNavbar(false);
    }
  }, [isMobile, navbar]);

  return (
    <Navbar expand="xl" expanded={navbar} className="py-0 px-4">
      <Navbar.Brand onClick={collapseNavbar} className="p-0 mr-4">
        <NavLink exact to="/">
          <img src={isMobile ? logoName : logoOriginal} alt="logo" />
        </NavLink>
      </Navbar.Brand>

      {isMobile && <FiPhone className="ml-auto nav-icon" />}
      <Navbar.Toggle aria-controls="navbar-nav" className="nav-icon p-0" onClick={toggleNavbar} />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          {/* AboutPage */}
          <NavigationDropdown toggleNavbar={toggleNavbar} data={about} />

          {/* ServicesPage */}
          <NavLink
            exact
            to="/services"
            activeClassName="active"
            className="nav-item"
            onClick={collapseNavbar}
          >
            {t('nav.services')}
          </NavLink>

          {/* ProductPage */}
          <NavigationDropdown toggleNavbar={toggleNavbar} data={products} />

          {/* KnowledgePage */}
          <NavLink
            exact
            to="/knowledge"
            activeClassName="active"
            className="nav-item"
            onClick={collapseNavbar}
          >
            {t('nav.knowledge')}
          </NavLink>

          {/* ContactPage */}
          <NavLink
            exact
            to="/contacts"
            activeClassName="active"
            className="nav-item"
            onClick={collapseNavbar}
          >
            {t('nav.contacts')}
          </NavLink>
        </Nav>

        <Nav>
          {!isMobile && (
            <div className="nav-item">
              <Link to="/booking">
                <Button variant="primary" className="btn-round">
                  {t('nav.booking')}
                </Button>
              </Link>
            </div>
          )}
          <div className="nav-item delimited-list">
            <div className={`${lng === 'zh' && 'active'}`} onClick={() => changeLanguage('zh')}>
              {t(`nav.language_zh`)}
            </div>
            <span className="px-2">|</span>
            <div className={`${lng === 'en' && 'active'}`} onClick={() => changeLanguage('en')}>
              {t(`nav.language_en`)}
            </div>
          </div>
          <Link to="#" className="nav-item" onClick={openLogin} hidden={authToken}>
            {t('nav.login')}
          </Link>
          <NavLink to="/profile" activeClassName="active" className="nav-item" hidden={!authToken}>
            {name}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
