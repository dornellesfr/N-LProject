/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
import React from 'react';
import '../assets/css/styleForm.css';
import '../assets/css/styleContact.css';
import {
  Label, TextInput, Button, Textarea,
} from 'flowbite-react';
import checkEmail from '../utils/checkEmail';
import sendEmailJs from '../utils/sendEmails';
import PopUpErr from './PopUpErr';
import Modal from './Modal';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clientSurname: '',
      clientEmail: '',
      clientMessage: '',
      popUp: false,
      modal: false,
    };
  }

  setPopUp = () => {
    const { popUp } = this.state;
    if (!popUp) this.setState({ popUp: true });
    if (popUp) this.setState({ popUp: false });
  };

  setModal = () => {
    const { modal } = this.state;
    if (!modal) this.setState({ modal: true });
    if (modal) this.setState({ modal: false });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();

    const {
      clientName, clientSurname, clientEmail, clientMessage,
    } = this.state;

    if (clientName === '') {
      this.setPopUp();
      return;
    }
    if (clientSurname === '') {
      this.setPopUp();
      return;
    }
    if (!checkEmail(clientEmail)) {
      this.setPopUp();
      return;
    }
    if (clientMessage === '') {
      this.setPopUp();
      return;
    }

    try {
      const newState = await sendEmailJs(this.state);
      this.setState(newState);
      this.setModal();
    } catch (error) {
      this.setPopUp();
    }
  };

  render() {
    const {
      clientName, clientSurname, clientEmail, clientMessage, popUp, modal,
    } = this.state;
    const { setPopUp, setModal } = this;

    return (
      <>
        <div id="contact-page-bg-1" className="fixed overflow-hidden" />
        <div id="contact-page-bg-2" className="fixed overflow-hidden" />
        <main id="contact-page-form" className="bg-red-700 w-8/12 p-6 rounded-2xl shadow-2xl flex flex-col gap-2 md:w-4/12">
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl">Entre em contato conosco</h2>
          <div className="mb-2 block">
            <Label
              htmlFor="client-name"
              value="Seu nome"
              className="text-white"
            />
          </div>
          <TextInput
            data-testid="page-contact-input-name"
            id="client-name"
            type="text"
            placeholder="Seu nome"
            required
            value={clientName}
            name="clientName"
            onChange={this.handleChange}
          />
          <div className="mb-2 block">
            <Label
              htmlFor="client-surname"
              value="Seu sobrenome"
              className="text-white"
            />
          </div>
          <TextInput
            data-testid="page-contact-input-surname"
            id="client-surname"
            type="text"
            placeholder="Seu sobrenome"
            required
            value={clientSurname}
            name="clientSurname"
            onChange={this.handleChange}
          />
          <div className="mb-2 block">
            <Label
              htmlFor="email4"
              value="Seu email"
              className="text-white"
            />
          </div>
          <TextInput
            data-testid="page-contact-input-email"
            id="email4"
            type="email"
            name="clientEmail"
            value={clientEmail}
            placeholder="seu_email@gmail.com"
            onChange={this.handleChange}
            required
          />
          <div className="mb-2 block">
            <Label
              htmlFor="comment"
              value="Deixe sua mensagem"
              className="text-white"
            />
          </div>
          <Textarea
            data-testid="page-contact-input-text"
            id="comment"
            placeholder="Digite aqui..."
            required
            rows={4}
            name="clientMessage"
            value={clientMessage}
            onChange={this.handleChange}
          />
          <Button data-testid="page-contact-button-send" type="submit" className="mt-4" onClick={this.sendEmail}>
            Enviar
          </Button>
          <PopUpErr data-testid="popup" showPopUp={{ popUp, setPopUp }} />
          <Modal data-testid="modal" showModal={{ modal, setModal }} />
        </main>
      </>
    );
  }
}
