import React, { useState, useCallback } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { render } from 'hops';
import { LANGUAGES } from './constants';

const getInitialLanguages = () =>
  LANGUAGES.map((x) => ({ ...x, selected: false }));

const appendPlaceholderToWord = (placeholder) => (word) =>
  word.replace(/([^a-z0-9]*)$/i, `${placeholder}$1`);

const normalizeText = (text = '') => text.trim().replace(/\s+/g, ' ');

const fillWithPlaceholderLetters = (text, ratio, placeholder = 'x') => {
  const appendToWord = appendPlaceholderToWord(placeholder);
  const finalLength = Math.round(text.length * ratio) - text.length;
  const words = text.split(/\s+/);
  const size = words.length;
  const iterations = Array.from({ length: finalLength }, (_, i) => i).reduce(
    (acc, i) => {
      if (!i || !(i % size)) {
        return [...acc, [i]];
      }
      const lastItemIndex = acc.length - 1;
      const lastItem = acc[lastItemIndex];
      lastItem.push(i);
      return [...acc.slice(0, lastItemIndex), lastItem];
    },
    []
  );

  return iterations
    .reduce((finalWords, iteration) => {
      iteration.forEach((_, i) => {
        finalWords[i] = appendToWord(finalWords[i]);
      });
      return finalWords;
    }, words.slice())
    .join(' ');
};

const Form = ({
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
    <button onClick={onResetClick} type="reset">
      Reset
    </button>
  </form>
);

const Result = ({ language, text }) =>
  text.length ? (
    <div>
      <label htmlFor={`result-${language.toLowerCase()}`}>{language}</label>
      <textarea defaultValue={text} readOnly={true} />
      <strong>{text.length} characters</strong>
    </div>
  ) : null;

const Fillrrr = () => {
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
      <Helmet>
        <title>Fillrrr</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>
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

const NotFound = () => (
  <>
    <h1>Nothing available here…</h1>
    <Link to="/">Back to the startpage</Link>
  </>
);

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Fillrrr} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </div>
);

export default render(<App />);
