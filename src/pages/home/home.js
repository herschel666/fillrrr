import React, { useState, useCallback } from 'react';
import { normalizeText, fillWithPlaceholderLetters } from '../../util';
import { LANGUAGES } from '../../constants';
import { Form } from '../../components/form/';
import { Result } from '../../components/result/';

const getInitialLanguages = () =>
  LANGUAGES.map((x) => ({ ...x, selected: false }));

export const Home = () => {
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [languages, setLanguages] = useState(getInitialLanguages);
  const [filledTexts, setFilledTexts] = useState([]);
  const handleLanguageChange = useCallback(
    (evnt) =>
      setLanguages(
        languages.map((item) => {
          if (item.name !== evnt.target.value) {
            return item;
          }
          return {
            ...item,
            selected: evnt.target.checked,
          };
        })
      ),
    [languages]
  );
  const handleTextChange = useCallback(
    (evnt) => {
      setText(evnt.target.value);
      setTextLength(evnt.target.value.trim().length);
    },
    [text, textLength]
  );
  const handleSubmit = useCallback(
    (evnt) => {
      evnt.preventDefault();
      const relevantLanguages = languages.filter(({ selected }) => selected);

      setFilledTexts(
        relevantLanguages.map((item) => ({
          text: fillWithPlaceholderLetters(normalizeText(text), item.ratio),
          language: item.name,
        }))
      );
    },
    [text, languages]
  );
  const handleResetClick = useCallback(() => {
    setFilledTexts([]);
    setLanguages(getInitialLanguages());
    setText('');
  });

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        languages={languages}
        onLanguageChange={handleLanguageChange}
        text={text}
        onTextChange={handleTextChange}
        textLength={textLength}
        onResetClick={handleResetClick}
      />
      <hr />
      {filledTexts.map((props) => (
        <Result key={props.language} {...props} />
      ))}
    </>
  );
};
