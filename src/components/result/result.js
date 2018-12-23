import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';

import { Textarea } from '../textarea';
import { IconChevronDown } from '../../ui/icon-chevron-down';
import {
  TopBar,
  Wrapper,
  ToggleIconElem,
  RotatedToggleIconElem,
  Detail,
} from './elements';

export const Result = ({ language, text }) => {
  const [detailOpen, toggleDetailOpen] = useState(true);
  const handleClick = useCallback(() => toggleDetailOpen(!detailOpen), [
    detailOpen,
  ]);
  const handleMouseOver = useCallback((evnt) => evnt.target.select());
  const handleMouseOut = useCallback((evnt) => {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
    evnt.target.blur();
  });
  const name = `result-${language.toLowerCase()}`;

  return text.length ? (
    <Wrapper>
      <TopBar
        onClick={handleClick}
        data-toggle="collapse"
        data-target={`#${name}`}
        aria-expanded={detailOpen}
        aria-controls={name}
      >
        <span>Result for &quot;{language}&quot;</span>
        <IconChevronDown
          elem={detailOpen ? RotatedToggleIconElem : ToggleIconElem}
        />
      </TopBar>
      {detailOpen && (
        <Detail id={name}>
          <Textarea
            defaultValue={text}
            textLength={text.length}
            readOnly={true}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </Detail>
      )}
    </Wrapper>
  ) : null;
};

Result.propTypes = {
  language: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
