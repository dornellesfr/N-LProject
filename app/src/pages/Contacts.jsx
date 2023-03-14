import React from 'react';
import '../assets/css/styleContact.css';
import Form from '../components/Form';
import Whatsapp from '../components/Whatsapp';
import Maps from '../components/Maps';

function Contacts() {
  return (
    <>
      <Form />
      <Whatsapp className="page-contact-session-whatsapp" />
      <Maps />
    </>
  );
}

export default Contacts;
