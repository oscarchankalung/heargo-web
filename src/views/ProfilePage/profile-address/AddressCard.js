import React from "react";
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const AddressCard = ({ address, deleteAddress }) => {

  return (
    <Card key={address.id} className={address.default && "default"}>
      <Card.Body>
        {address.room}, {address.floor}, {address.block}<br />
        {address.house}<br />
        {address.district}<br />
        {address.zone}<br />
        <div className="fa-icon float-right" onClick={() => {deleteAddress(address.id)}}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </Card.Body>
    </Card>
  );
};
