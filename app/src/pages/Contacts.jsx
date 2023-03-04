import React from 'react';
import '../assets/css/styleContact.css';
import Form from '../components/Form';

function Contacts() {
  return (
    <>
      <div
        id="contact-page-bg"
        className="fixed w-screen h-screen overflow-hidden"
      />
      <Form />
    </>
  );
}

export default Contacts;
