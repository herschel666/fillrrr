import React from 'react';
import propTypes from 'prop-types';

export const Form = ({
  onSubmit,
  languages,
  onLanguageChange,
  text,
  onTextChange,
  textLength,
  onResetClick,
}) => (
  <form method="post" onSubmit={onSubmit}>
    <header>
      <button>Fill</button>
      <button onClick={onResetClick} type="reset">
        Reset
      </button>
      {languages.map(({ title, name, selected }) => (
        <label htmlFor={name} key={name}>
          <input
            type="checkbox"
            id={name}
            value={name}
            onChange={onLanguageChange}
            checked={selected}
          />
          {title}
        </label>
      ))}
    </header>
    <textarea value={text} onChange={onTextChange} />
    <strong>{textLength} characters</strong>
  </form>
);

Form.propTypes = {
  onSubmit: propTypes.func.isRequired,
  languages: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      selected: propTypes.bool.isRequired,
    })
  ).isRequired,
  onLanguageChange: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  onTextChange: propTypes.func.isRequired,
  textLength: propTypes.number.isRequired,
  onResetClick: propTypes.func.isRequired,
};
