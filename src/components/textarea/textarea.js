import React from 'react';
import propTypes from 'prop-types';

import { Textarea as BaseTextarea } from '../../ui/textarea';
import { TextLength } from './elements';

export const Textarea = ({
  value,
  defaultValue,
  textLength,
  onChange,
  readOnly,
  onMouseOver,
}) => (
  <>
    <BaseTextarea
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      readOnly={readOnly}
      onMouseOver={onMouseOver}
    />
    <TextLength>{textLength} characters</TextLength>
  </>
);

Textarea.propTypes = {
  value: propTypes.string,
  defaultValue: propTypes.string,
  textLength: propTypes.number.isRequired,
  onChange: propTypes.func,
  readOnly: propTypes.bool,
  onMouseOver: propTypes.func,
};
