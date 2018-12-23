import React from 'react';
import propTypes from 'prop-types';

import { Button } from '../../ui/button';
import { Form as FormElement, Controls } from './elements';
import { Textarea } from '../textarea';
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
    <Controls>
      <Textarea
        id="original-text"
        value={text}
        textLength={textLength}
        onChange={onTextChange}
        placeholder="Enter the original text&hellip;"
        label="Original text"
      />
    </Controls>
    <Controls>
      <Button>Fill</Button>
      <Button onClick={onResetClick} type="reset">
        Reset
      </Button>
    </Controls>
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
