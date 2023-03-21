/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import 'intersection-observer';
import sendEmailJs from '../utils/sendEmails';

jest.mock('@emailjs/browser');

describe('Test the service page', () => {
  beforeEach(() => {
    delete window.location;
    window.location = new URL('http://localhost/');
  });

  it('should verify title in page "/contact"', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonContact = screen.getByTestId('button-contact');
    expect(buttonContact).toBeInTheDocument();

    act(() => userEvent.click(buttonContact));

    await screen.findByText('Entre em contato conosco');

    expect(history.location.pathname).toBe('/contact');
  });
  it('should verify that have four input fields in page "/contact"', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonContact = screen.getByTestId('button-contact');
    act(() => userEvent.click(buttonContact));
    await screen.findByText('Entre em contato conosco');
    expect(history.location.pathname).toBe('/contact');

    const inputs = screen.getAllByRole('textbox');

    expect(inputs).toHaveLength(4);
  });
  it('should appear a error if some field is not filled correctly', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonContact = screen.getByTestId('button-contact');
    act(() => userEvent.click(buttonContact));
    await screen.findByText('Entre em contato conosco');
    expect(history.location.pathname).toBe('/contact');

    const inputName = screen.getByTestId('page-contact-input-name');
    const inputLastName = screen.getByTestId('page-contact-input-surname');
    const inputEmail = screen.getByTestId('page-contact-input-email');
    const inputText = screen.getByTestId('page-contact-input-text');
    const buttonSend = screen.getByTestId('page-contact-button-send');

    expect(inputName).toBeInTheDocument();
    expect(inputLastName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
    expect(buttonSend).toBeInTheDocument();

    const modals = screen.getAllByTestId('modal');
    const popUpErro = modals[0];

    expect(popUpErro).toHaveClass('hidden');

    act(() => userEvent.type(inputName, 'Jane'));
    act(() => userEvent.type(inputLastName, 'Doe'));
    act(() => userEvent.type(inputEmail, 'jane@doe.com'));
    act(() => userEvent.click(buttonSend));

    expect(popUpErro).not.toHaveClass('hidden');

    const buttonCloseModal = screen.getByTestId('popup-button-close');
    act(() => userEvent.click(buttonCloseModal));

    expect(popUpErro).toHaveClass('hidden');
  });
  it('should validate a valid email', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonContact = screen.getByTestId('button-contact');
    act(() => userEvent.click(buttonContact));
    await screen.findByText('Entre em contato conosco');
    expect(history.location.pathname).toBe('/contact');

    const inputName = screen.getByTestId('page-contact-input-name');
    const inputLastName = screen.getByTestId('page-contact-input-surname');
    const inputEmail = screen.getByTestId('page-contact-input-email');
    const inputText = screen.getByTestId('page-contact-input-text');
    const buttonSend = screen.getByTestId('page-contact-button-send');

    act(() => userEvent.type(inputName, 'Jane'));
    act(() => userEvent.type(inputLastName, 'Doe'));
    act(() => userEvent.type(inputEmail, 'janedoe.com'));
    act(() => userEvent.type(inputText, 'Text here'));

    const modals = screen.getAllByTestId('modal');
    const popUpErro = modals[0];
    expect(popUpErro).toHaveClass('hidden');

    act(() => userEvent.click(buttonSend));

    expect(popUpErro).not.toHaveClass('hidden');
  });
  it('should show message sucess to send a email', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonContact = screen.getByTestId('button-contact');
    act(() => userEvent.click(buttonContact));
    await screen.findByText('Entre em contato conosco');
    expect(history.location.pathname).toBe('/contact');

    const inputName = screen.getByTestId('page-contact-input-name');
    const inputLastName = screen.getByTestId('page-contact-input-surname');
    const inputEmail = screen.getByTestId('page-contact-input-email');
    const inputText = screen.getByTestId('page-contact-input-text');

    expect(inputName).toBeInTheDocument();
    expect(inputLastName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();

    act(() => userEvent.type(inputName, 'Jane'));
    act(() => userEvent.type(inputLastName, 'Doe'));
    act(() => userEvent.type(inputEmail, 'jane@doe.com'));
    act(() => userEvent.type(inputText, 'Email de teste'));

    const buttonSend = screen.getByTestId('page-contact-button-send');
    expect(buttonSend).toBeInTheDocument();

    act(() => userEvent.click(buttonSend));

    const modal = screen.getAllByTestId('modal');

    expect(modal[0]).toHaveClass('hidden');
    await waitFor(() => expect(modal[1]).not.toHaveClass('hidden'));
  });
  it('should call emailjs with the right args', async () => {
    const payload = {
      clientName: 'John',
      clientSurname: 'Doe',
      clientEmail: 'john.doe@example.com',
      clientMessage: 'Teste de mensagem',
    };

    await sendEmailJs(payload);

    expect(emailjs.send).toHaveBeenCalledWith(
      process.env.REACT_APP_SERVICE_ID,
      'template_392dpvp',
      {
        from_name: `${payload.clientName} ${payload.clientSurname}`,
        message: payload.clientMessage,
        email: payload.clientEmail,
      },
      process.env.REACT_APP_API_EMAIL,
    );
  });
  it('should show banner with whatsapp when click in button', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonContact = screen.getByTestId('button-contact');
    act(() => userEvent.click(buttonContact));
    await screen.findByText('Entre em contato conosco');
    expect(history.location.pathname).toBe('/contact');

    const buttonWpp = screen.getByTestId('page-contact-button-whatsapp');
    expect(buttonWpp).toBeInTheDocument();

    const whatsappBanner = screen.getByTestId('whatsapp-banner');
    expect(whatsappBanner).toBeInTheDocument();
    expect(whatsappBanner).toHaveStyle('display: none');

    act(() => userEvent.click(buttonWpp));

    await waitFor(() => expect(whatsappBanner).toHaveStyle('display: grid'));
  });
});
