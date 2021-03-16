import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { 
  Container,
  Row,
  Col, } from 'react-bootstrap'
import { ProfileList } from "./ProfileList"
import { ProfileInfo } from "./profile-info/ProfileInfo"
import { ProfileAddress } from "./profile-address/ProfileAddress"
import { ProfileBooking } from "./profile-booking/ProfileBooking"

export const ProfilePage = () => {
  
  return (
    <div className="profile_page">
      <Container>
        <Row>
          <Col md={3}><ProfileList /></Col>
          <Col md={9}>
            <Switch>
              {
                /* Redirect from eCommerce root URL to /customers */
                <Redirect
                  exact={true}
                  from="/profile"
                  to="/profile/info"
                />
              }
              <Route path="/profile/info" component={ProfileInfo} />
              <Route path="/profile/address" component={ProfileAddress} />
              <Route path="/profile/booking" component={ProfileBooking} />
              <Redirect to="/error" />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
