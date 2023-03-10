/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */

'strict mode';

import React from 'react';
import '../assets/css/styleForm.css';
import {
  Label, TextInput, Button, Textarea,
} from 'flowbite-react';
import checkEmail from '../utils/checkEmail';
import sendEmailJs from '../utils/sendEmails';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clientSurname: '',
      clientEmail: '',
      clientMessage: '',
    };
  }

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
      window.alert('Necessário preencher o campo nome');
      return;
    }
    if (clientSurname === '') {
      window.alert('Necessário o campo sobrenome');
      return;
    }
    if (!checkEmail(clientEmail)) {
      window.alert('Necessário um endereço de email válido');
      return;
    }
    if (clientMessage === '') {
      window.alert('Necessário o campo nome');
      return;
    }

    try {
      const newState = await sendEmailJs(this.state);
      this.setState(newState);
    } catch (error) {
      window.alert(error.message);
    }
  };

  render() {
    const {
      clientName, clientSurname, clientEmail, clientMessage,
    } = this.state;
    return (
      <>
        <div id="contact-page-bg-1" className="fixed overflow-hidden" />
        <div id="contact-page-bg-2" className="fixed overflow-hidden" />
        <div id="contact-page-form" className="bg-red-700 w-8/12 p-6 rounded-2xl shadow-2xl flex flex-col gap-2 md:w-4/12">
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl">Entre em contato conosco</h2>
          <div className="mb-2 block">
            <Label
              htmlFor="client-name"
              value="Seu nome"
              className="text-white"
            />
          </div>
          <TextInput
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
            id="comment"
            placeholder="Digite aqui..."
            required
            rows={4}
            name="clientMessage"
            value={clientMessage}
            onChange={this.handleChange}
          />
          <Button type="submit" className="mt-4" onClick={this.sendEmail}>
            Enviar
          </Button>
        </div>

      </>
    );
  }
}
