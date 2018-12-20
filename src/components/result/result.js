import React from 'react';
import propTypes from 'prop-types';

export const Result = ({ language, text }) =>
  text.length ? (
    <div>
      <label htmlFor={`result-${language.toLowerCase()}`}>{language}</label>
      <textarea defaultValue={text} readOnly={true} />
      <strong>{text.length} characters</strong>
    </div>
  ) : null;

Result.propTypes = {
  language: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
