import React, { useCallback, useReducer } from 'react';
import { normalizeText, fillWithPlaceholderLetters } from '../../util';
import {
  reducer,
  withLogger,
  initialState,
  submitAction,
  textChangeAction,
  languageChangeAction,
  resetAction,
} from './state';
import { Form } from '../../components/form/';
import { Result } from '../../components/result/';

export const Home = () => {
  const [state, dispatch] = useReducer(withLogger(reducer), initialState);
  const { text, filledTexts, textLength, languages } = state;
  const handleLanguageChange = useCallback((evnt) =>
    dispatch(languageChangeAction(evnt.target.value, evnt.target.checked))
  );
  const handleTextChange = useCallback((evnt) =>
    dispatch(textChangeAction(evnt.target.value))
  );
  const handleSubmit = useCallback(
    (evnt) => {
      evnt.preventDefault();
      const relevantLanguages = languages.filter(({ selected }) => selected);

      dispatch(
        submitAction(
          relevantLanguages.map((item) => ({
            text: fillWithPlaceholderLetters(normalizeText(text), item.ratio),
            language: item.name,
          }))
        )
      );
    },
    [text, languages]
  );
  const handleResetClick = useCallback(() => dispatch(resetAction()));

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
      {filledTexts.map((props) => (
        <Result key={props.language} {...props} />
      ))}
    </>
  );
};
