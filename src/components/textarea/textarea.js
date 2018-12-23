import React from 'react';
import propTypes from 'prop-types';

import { Textarea as BaseTextarea } from '../../ui/textarea';
import { VisuallyHidden } from '../../ui/visually-hidden';
import { TextLength } from './elements';

export const Textarea = ({
  id,
  rows,
  placeholder,
  label,
  value,
  defaultValue,
  textLength,
  onChange,
  readOnly,
  onMouseOver,
  onMouseOut,
}) => (
  <>
    {label && id && (
      <VisuallyHidden as="label" htmlFor={id}>
        {label}
      </VisuallyHidden>
    )}
    <BaseTextarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      readOnly={readOnly}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
    <TextLength>{textLength} characters</TextLength>
  </>
);

Textarea.propTypes = {
  id: propTypes.string,
  rows: propTypes.number,
  placeholder: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  defaultValue: propTypes.string,
  textLength: propTypes.number.isRequired,
  onChange: propTypes.func,
  readOnly: propTypes.bool,
  onMouseOver: propTypes.func,
  onMouseOut: propTypes.func,
};

Textarea.defaultProps = {
  rows: 4,
};
