/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import 'intersection-observer';

describe('Test navbar', () => {
  beforeEach(() => {
    delete window.location;
    window.location = new URL('http://localhost/');
  });

  it('Should find the buttons in navbar', () => {
    const { history } = renderWithRouter(<App />);

    const email = screen.getByText(/servicos\.nlterraplanagem@gmail\.com/);
    const whatsapp = screen.getByText('(51) 99584-9857');
    const Mariana = screen.getByText(/Mariana/i);
    const NL = screen.getByText(/N&L/i);
    const buttonHome = screen.getByTestId('button-home');
    const buttonServices = screen.getByTestId('button-services');
    const buttonAbout = screen.getByTestId('button-about');
    const buttonContact = screen.getByTestId('button-contact');
    const buttonReturn = screen.getByRole('button', { name: /retornar/i });

    expect(history.location.pathname).toBe('/');
    expect(email).toBeInTheDocument();
    expect(whatsapp).toBeInTheDocument();
    expect(Mariana).toBeInTheDocument();
    expect(NL).toBeInTheDocument();
    expect(buttonHome).toBeInTheDocument();
    expect(buttonServices).toBeInTheDocument();
    expect(buttonAbout).toBeInTheDocument();
    expect(buttonContact).toBeInTheDocument();
    expect(buttonReturn).toBeInTheDocument();
  });
  it('Should click in "serviços" and redirect to /services', () => {
    const { history } = renderWithRouter(<App />);

    const buttonServices = screen.getByTestId('button-services');

    act(() => userEvent.click(buttonServices));
    expect(history.location.pathname).toBe('/services');
  });
  it('Should click in "sobre" and redirect to /about', () => {
    window.scrollTo = jest.fn();
    const { history } = renderWithRouter(<App />);

    const buttonAbout = screen.getByTestId('button-about');

    act(() => userEvent.click(buttonAbout));

    expect(history.location.pathname).toBe('/about');
  });
  it('Should click in "Contato" and redirect to /contact', () => {
    const { history } = renderWithRouter(<App />);

    const buttonContact = screen.getByTestId('button-contact');

    act(() => userEvent.click(buttonContact));

    expect(history.location.pathname).toBe('/contact');
  });
  it('Should be a route "/"', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
  });
  it('Should have a Link of whatsapp to "https://wa.me/5551995849857"', () => {
    renderWithRouter(<App />);

    const whatsapp = screen.getByTestId('navbar-whatsapp');
    expect(whatsapp.closest('a')).toHaveAttribute('href', 'https://wa.me/5551995849857');
  });
  it('Should click in any image and redirect to "/"', () => {
    const { history } = renderWithRouter(<App />);

    const logoNl = screen.getByTestId('navbar-logo-nl');

    act(() => userEvent.click(logoNl));
    expect(history.location.pathname).toBe('/');

    const logoMariana = screen.getByTestId('navbar-logo-mariana');

    act(() => userEvent.click(logoMariana));
    expect(history.location.pathname).toBe('/');
  });
});
