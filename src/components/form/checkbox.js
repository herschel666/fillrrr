import React from 'react';
import propTypes from 'prop-types';

import { FormLabel, Input } from './elements';

export const Checkbox = ({ name, title, checked, onChange }) => (
  <FormLabel htmlFor={name}>
    <Input
      type="checkbox"
      id={name}
      value={name}
      onChange={onChange}
      checked={checked}
    />
    {title}
  </FormLabel>
);

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
};
