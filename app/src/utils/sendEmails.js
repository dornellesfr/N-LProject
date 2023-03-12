/* eslint-disable no-alert */
import emailjs from '@emailjs/browser';

async function sendEmailJs(payload) {
  const {
    clientName, clientSurname, clientEmail, clientMessage,
  } = payload;
  const templateParams = {
    from_name: `${clientName} ${clientSurname}`,
    message: clientMessage,
    email: clientEmail,
  };

  const API_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const API_EMAIL = process.env.REACT_APP_API_EMAIL;

  try {
    await emailjs.send(API_SERVICE_ID, 'template_392dpvp', templateParams, API_EMAIL);
    return {
      clientName: '',
      clientSurname: '',
      clientEmail: '',
      clientMessage: '',
    };
  } catch (error) {
    window.alert(error.message);
    return {
      clientName: '',
      clientSurname: '',
      clientEmail: '',
      clientMessage: '',
    };
  }
}

export default sendEmailJs;
