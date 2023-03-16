/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import 'intersection-observer';

describe('Test page about', () => {
  beforeEach(() => {
    delete window.location;
    window.location = new URL('http://localhost/');
  });

  beforeEach(async () => {
    const { history } = renderWithRouter(<App />);
    window.scrollTo = jest.fn();
    const buttonAbout = screen.getByTestId('button-about');
    act(() => userEvent.click(buttonAbout));
    expect(history.location.pathname).toBe('/about');
  });

  it('should verify title in page "/about"', async () => {
    const title = await screen.findByText('Um pouco sobre nós');
    expect(title).toBeInTheDocument();
  });
  it('should verify text in page "/about"', async () => {
    const firstBox = screen.getByTestId('page-about-first-box-text');
    const secondBox = screen.getByTestId('page-about-second-box-text');
    const thirdBox = screen.getByTestId('page-about-third-box-text');

    expect(firstBox).toBeInTheDocument();
    expect(secondBox).toBeInTheDocument();
    expect(thirdBox).toBeInTheDocument();
  });
  it('should count 6 images with alt machine in page "/about"', async () => {
    const allMachineImages = screen.getAllByAltText('machine');

    expect(allMachineImages).toHaveLength(6);
  });
  it('should count 6 images with alt team in page "/about"', async () => {
    const allMachineImages = screen.getAllByAltText('team');

    expect(allMachineImages).toHaveLength(3);
  });
  it('should have a button that push to page "/contact"', async () => {
    const buttonToContact = screen.getByRole('link', { name: /fale conosco/i });
    expect(buttonToContact).toBeInTheDocument();
  });
});
describe('Testing button page "/about" to "/contact"', () => {
  const { history } = renderWithRouter(<App />);
  window.scrollTo = jest.fn();
  const buttonAbout = screen.getByTestId('button-about');
  act(() => userEvent.click(buttonAbout));
  expect(history.location.pathname).toBe('/about');
});
