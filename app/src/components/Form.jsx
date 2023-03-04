/* eslint-disable class-methods-use-this */
import React from 'react';
import '../assets/css/styleForm.css';
import {
  Label, TextInput, Button, Textarea,
} from 'flowbite-react';

// export default Navbar;
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = (e) => {
    if (e.target.inputName === 'clientName') {
      this.setState({ clientName: e.target.value });
    }
    if (e.target.inputName === 'clientSurname') {
      this.setState({ clientSurname: e.target.value });
    }
    if (e.target.inputName === 'clientEmail') {
      this.setState({ clientEmail: e.target.value });
    }
    if (e.target.inputName === 'clientMessage') {
      this.setState({ clientMessage: e.target.value });
    }
  };

  render() {
    const {
      clientName, clientSurname, clientEmail, clientMessage,
    } = this.state;
    return (
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
          inputName="clientName"
          onChange={this.handleInputChange}
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
          inputName="clientSurname"
          onChange={this.handleInputChange}
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
          value={clientEmail}
          placeholder="seu_email@gmail.com"
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
          value={clientMessage}
        />
        <Button type="submit" className="mt-4">
          Enviar
        </Button>
      </div>
    );
  }
}
