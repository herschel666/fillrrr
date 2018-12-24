import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { App } from '../app';

const languages = ['German', 'French', 'Greek'];
const texts = {
  ORIGINAL: `Hi, I'm a "test" text. And now: add your Xs, please! Thanks.`,
  GERMAN: `Hix, I'mx ax "testx" textx. Andx nowx: addx yourx Xsx, please! Thanks.`,
  FRENCH: `Hixx, I'mxx axx "testxx" textxx. Andx nowx: addx yourx Xsx, pleasex! Thanksx.`,
  GREEK: `Hixx, I'mxx axx "testxx" textxx. Andxx nowxx: addxx yourxx Xsx, pleasex! Thanksx.`,
};

const toLower = (s) => s.toLowerCase();
const toUpper = (s) => s.toUpperCase();

const renderApp = () => {
  const result = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const textarea = result.getByPlaceholderText('Enter the original text…');
  const checkboxes = languages.reduce(
    (acc, text) => ({
      ...acc,
      [toLower(text)]: result.getByLabelText(text),
    }),
    {}
  );
  const submit = result.getByText('Fill');
  const reset = result.getByText('Reset');

  return {
    ...result,
    elems: {
      textarea,
      checkboxes,
      submit,
      reset,
    },
  };
};

describe('App::home', () => {
  afterEach(cleanup);

  it('should display an error when no language is selected', () => {
    const { elems, getByText } = renderApp();

    expect(() => getByText('Please choose at least one language.')).toThrow();

    fireEvent.change(elems.textarea, {
      target: { value: 'Lorem ipsum dolor sit amet.' },
    });
    fireEvent.click(elems.submit);

    const feedback = getByText('Please choose at least one language.');
    expect(feedback).toBeTruthy();
    expect(feedback).toHaveAttribute('role', 'alert');
  });

  it('should fill up languages', () => {
    const { elems, getByDisplayValue } = renderApp();

    languages.map(toLower).forEach((lang) => {
      expect(elems.checkboxes[lang].checked).toBe(false);
      fireEvent.click(elems.checkboxes[lang]);
      expect(elems.checkboxes[lang].checked).toBe(true);
    });

    fireEvent.change(elems.textarea, {
      target: { value: texts.ORIGINAL },
    });
    fireEvent.click(elems.submit);

    languages.map(toUpper).forEach((lang) => {
      expect(() => getByDisplayValue(texts[lang])).not.toThrow();
    });
  });

  it('should toggle the result textbox', () => {
    const { elems, getByText, getByDisplayValue } = renderApp();

    fireEvent.click(elems.checkboxes.german);
    fireEvent.change(elems.textarea, {
      target: { value: 'Hello' },
    });
    fireEvent.click(elems.submit);

    const toggle = getByText('Result for "DE"');

    expect(getByDisplayValue('Hellox')).toBeTruthy();
    fireEvent.click(toggle);
    expect(() => getByDisplayValue('Hellox')).toThrow();
  });

  it('should reset the form & the results', () => {
    const { elems, getByDisplayValue } = renderApp();
    const value = 'Reset me, plz!';
    const french = 'Resetxx mex, plzx!';

    fireEvent.click(elems.checkboxes.french);
    fireEvent.change(elems.textarea, {
      target: { value },
    });
    fireEvent.click(elems.submit);

    expect(getByDisplayValue(french)).toBeTruthy();

    fireEvent.click(elems.reset);

    expect(elems.checkboxes.french.checked).toBe(false);
    expect(() => getByDisplayValue(value)).toThrow();
    expect(() => getByDisplayValue(french)).toThrow();
  });
});
