import React from 'react';
import propTypes from 'prop-types';

import { Button } from '../../ui/button';
import { Textarea } from '../textarea';
import { Form as FormElement, Controls, InputWrapper } from './elements';
import { Checkbox } from './checkbox';

export const Form = ({
  onSubmit,
  languages,
  onLanguageChange,
  text,
  onTextChange,
  textLength,
  onResetClick,
}) => (
  <FormElement method="post" onSubmit={onSubmit}>
    <Controls>
      <Button>Fill</Button>
      <Button onClick={onResetClick} type="reset">
        Reset
      </Button>
      {languages.map(({ title, name, selected }) => (
        <Checkbox
          key={name}
          name={name}
          title={title}
          checked={selected}
          onChange={onLanguageChange}
        />
      ))}
    </Controls>
    <InputWrapper>
      <Textarea value={text} textLength={textLength} onChange={onTextChange} />
    </InputWrapper>
  </FormElement>
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
