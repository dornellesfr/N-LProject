/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import 'intersection-observer';

describe('test home page', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it('Should show the text "Home Page" ', () => {
    const homePage = screen.getByText(/home page/i);

    expect(homePage).toBeInTheDocument();
  });
  it('Should have a button with text "Conheça nossos serviços"', () => {
    const button = screen.getByRole('button', { name: /Conheça nossos serviços/i });

    expect(button).toBeInTheDocument();
  });
});
