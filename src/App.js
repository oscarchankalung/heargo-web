import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useViewport } from './components/useViewport/useViewport';

import './assets/styles/App.scss';
import { HomePage } from './views/HomePage/HomePage';
import { AboutPage } from './views/AboutPage/AboutPage';
import { ServicesPage } from './views/ServicesPage/ServicesPage';
import ProductsPage from './views/ProductsPage';
import BrandDetailPage from './views/BrandDetailPage';
import ProductDetailPage from './views/ProductDetailPage';
import AccessoriesPage from './views/AccessoriesPage';
import { KnowledgePage } from './views/KnowledgePage/KnowledgePage';
import { ContactPage } from './views/ContactPage/ContactPage';
import { BookingPage } from './views/BookingPage/BookingPage';
import { ProfilePage } from './views/ProfilePage/ProfilePage';
import { ErrorPage } from './views/ErrorPage';

import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { Info } from './components/Auth/Info';
import { Logout } from './components/Auth/Logout';
import { CalendarButton } from './components/CalendarButton/CalendarButton';

const App = () => {
  const { i18n } = useTranslation();
  const { width, breakpoints } = useViewport();
  const isMobile = width < breakpoints.sm;

  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [infoShow, setInfoShow] = useState(false);
  const [registerPhone, setRegisterPhone] = useState('');
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

  const openLogin = () => setLoginShow(true);
  const openRegister = () => setRegisterShow(true);
  const openInfo = (phone) => {
    setInfoShow(true);
    setRegisterPhone(phone);
  };

  return (
    <Router>
      <div className={i18n.language}>
        <NavigationBar openLogin={openLogin} authToken={authToken} />
        <Switch>
          <Route exact path="/">
            <HomePage openLogin={openLogin} />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/brand_detail" component={BrandDetailPage} />
          <Route path="/product_detail/:product_id" component={ProductDetailPage} />
          <Route path="/accessories_detail/:product_id" component={AccessoriesPage} />
          <Route path="/knowledge" component={KnowledgePage} />
          <Route path="/contacts" component={ContactPage} />
          <Route path="/booking">
            <BookingPage openLogin={openLogin} authToken={authToken} />
          </Route>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/logout">
            <Logout setAuthToken={setAuthToken} />
          </Route>
          <Route path="/error" component={ErrorPage} />
          <Redirect to="/error" />
        </Switch>
        <Footer />
        <Login
          show={loginShow}
          onHide={() => setLoginShow(false)}
          openRegister={openRegister}
          setAuthToken={setAuthToken}
        />
        <Register
          show={registerShow}
          onHide={() => setRegisterShow(false)}
          openLogin={openLogin}
          openInfo={openInfo}
        />
        <Info
          show={infoShow}
          onHide={() => setInfoShow(false)}
          registerPhone={registerPhone}
          openLogin={openLogin}
        />
        {isMobile && <CalendarButton id="nav.booking" />}
      </div>
    </Router>
  );
};

export default App;
