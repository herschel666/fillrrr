import React from 'react';

export const Result = ({ language, text }) =>
  text.length ? (
    <div>
      <label htmlFor={`result-${language.toLowerCase()}`}>{language}</label>
      <textarea defaultValue={text} readOnly={true} />
      <strong>{text.length} characters</strong>
    </div>
  ) : null;
