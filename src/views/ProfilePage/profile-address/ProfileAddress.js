import React, { useEffect, useState } from "react";
import { 
  Container,
  Row,
  Col,
  Alert, 
} from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { AddAddressForm } from "./AddAddressForm";
import * as request from "../../../api/member";
import { AddressCard } from "./AddressCard";


export const ProfileAddress = () => {
  const { t } = useTranslation();
  const [ alertShow, setAlertShow ] = useState(false)
  const [ successShow, setSuccessShow ] = useState(false)
  const [ addresses, setAddresses ] = useState([])

  const fetchMemberAddresses = () => {
    request.fetchMemberAddresses()
    .then(({data}) => {
      setAddresses(data)
    })
    .catch((err) => {
      console.log(err)
      setAlertShow(true)
    })
  }
  
  useEffect(() => {
    fetchMemberAddresses()
  }, [])


	const addAddress = requestData => {
    request.addMemberAddress(requestData)
    .then(() => {
      setSuccessShow(true)
      fetchMemberAddresses()
    })
    .catch((err) => {
      console.log(err)
      setAlertShow(true)
    })
  }

  const deleteAddress = requestData => {
    request.deleteMemberAddress(requestData)
    .then(() => {
      setSuccessShow(true)
      fetchMemberAddresses()
    })
    .catch((err) => {
      console.log(err)
      setAlertShow(true)
    })
  }



  return (
    <Container className="profile_content">
      <Row>
        <Col>
          <div className="mb-4">
            <h2>{t("member.profile.address.title")}</h2>
            <hr/>
          </div>
        </Col>
      </Row>
      <Row>
        {addresses.map(address => (
          <Col sm={4} key={address.id}>
            <AddressCard address={address} deleteAddress={deleteAddress}/>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Alert show={alertShow} variant="danger" onClose={() => setAlertShow(false)} dismissible>
            <p>{t("member.profile.info.alert_message")}</p>
          </Alert>
          <Alert show={successShow} variant="success" onClose={() => setSuccessShow(false)} dismissible>
            <p>{t("member.profile.info.success_message")}</p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <AddAddressForm addAddress={addAddress}/>
        </Col>
      </Row>
    </Container>
  );
};
