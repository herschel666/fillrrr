import React from 'react';

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
