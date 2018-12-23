import React from 'react';
import propTypes from 'prop-types';

import { Textarea as BaseTextarea } from '../../ui/textarea';
import { TextLength } from './elements';

export const Textarea = ({
  rows,
  value,
  defaultValue,
  textLength,
  onChange,
  readOnly,
  onMouseOver,
  onMouseOut,
}) => (
  <>
    <BaseTextarea
      rows={rows}
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
  rows: propTypes.number,
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
