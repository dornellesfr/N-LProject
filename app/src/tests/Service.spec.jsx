/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import 'intersection-observer';

describe('Test the service page', () => {
  beforeEach(() => {
    delete window.location;
    window.location = new URL('http://localhost/');
  });

  it('should verify title in page "/service"', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonServices = screen.getByTestId('button-services');
    expect(buttonServices).toBeInTheDocument();

    act(() => userEvent.click(buttonServices));

    await screen.findByText('Conheça nossos diversos serviços');

    expect(history.location.pathname).toBe('/services');
  });
  it('should verify if carousel is receiving src images', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonServices = screen.getByTestId('button-services');

    act(() => userEvent.click(buttonServices));
    expect(history.location.pathname).toBe('/services');

    const carousels = await screen.findAllByTestId('carousel-img');

    carousels.forEach((carousel) => {
      expect(carousel).toContainHTML('<img src');
    });
  });
  it('should verify if carousel is receiving texts', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonServices = screen.getByTestId('button-services');

    act(() => userEvent.click(buttonServices));
    expect(history.location.pathname).toBe('/services');

    const carouselTexts = await screen.findAllByTestId('carousel-text');

    expect(carouselTexts[0]).toHaveTextContent('Temos como clientes renomadas empresas do ramo florestal e agricultores da região. Contamos com maquinários amplo para realização de diversos serviços. Sendo alguns deles: Construção, limpeza e reformas de açudes, construção de barragens, abertura e manuntenção de estradas florestais e rodiviárias, abertura e limpeza de valas, destoca e drenagem de terrenos.');
    expect(carouselTexts[1]).toHaveTextContent('Além de prestar serviços, também, alugamos nossas máquinas de alta qualidade para outras pessoas ou empresa. Solicite um orçamento: venha conhecer nossa empresa!');
  });
  it('should have a button that push to page "/about"', async () => {
    const { history } = renderWithRouter(<App />);
    const buttonServices = screen.getByTestId('button-services');

    act(() => userEvent.click(buttonServices));
    expect(history.location.pathname).toBe('/services');

    const buttonToAbout = await screen.findByRole('link', { name: /conheça mais sobre a empresa/i });
    expect(buttonToAbout).toBeInTheDocument();

    act(() => userEvent.click(buttonToAbout));

    expect(history.location.pathname).toBe('/about');
  });
});
