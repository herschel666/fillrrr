import { LANGUAGES } from '../../constants';

const MESSAGE_MISSING_LANGUAGES = 'Please choose at least one language.';

const SUBMIT = 'home::SUBMIT';
const TEXT_CHANGE = 'home::TEXT_CHANGE';
const LANGUAGE_CHANGE = 'home::LANGUAGE_CHANGE';
const RESET = 'home::RESET';

export const submitAction = (filledTexts) => ({
  type: SUBMIT,
  payload: { filledTexts },
});

export const textChangeAction = (text) => ({
  type: TEXT_CHANGE,
  payload: { text },
});

export const languageChangeAction = (language, checked) => ({
  type: LANGUAGE_CHANGE,
  payload: { language, checked },
});

export const resetAction = () => ({
  type: RESET,
});

const initialLanguages = LANGUAGES.map((x) => ({ ...x, selected: false }));

export const initialState = {
  text: '',
  feedback: '',
  textLength: 0,
  languages: initialLanguages,
  filledTexts: [],
};

export const withLogger = (reducerFn) => (state, action) => {
  const newState = reducerFn(state, action);

  if (process.env.NODE_ENV === 'development') {
    console.groupCollapsed(`ACTION "${action.type}"`); // eslint-disable-line no-console
    console.log('prevState', { ...state }); // eslint-disable-line no-console
    console.log('action.payload', action.payload); // eslint-disable-line no-console
    console.log('newState', newState); // eslint-disable-line no-console
    console.groupEnd(); // eslint-disable-line no-console
  }

  return newState;
};

const hasChoosenLanguages = (state) =>
  state.languages.some(({ selected }) => selected);

const getFeedback = (state) => {
  return !state.text || hasChoosenLanguages(state)
    ? ''
    : MESSAGE_MISSING_LANGUAGES;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SUBMIT: {
      const feedback = getFeedback(state);

      return {
        ...state,
        filledTexts: action.payload.filledTexts,
        feedback,
      };
    }

    case TEXT_CHANGE:
      return {
        ...state,
        textLength: action.payload.text.trim().length,
        text: action.payload.text,
      };

    case LANGUAGE_CHANGE: {
      const languages = state.languages.map((item) => {
        if (item.name !== action.payload.language) {
          return item;
        }
        return {
          ...item,
          selected: action.payload.checked,
        };
      });
      const feedback = getFeedback({ ...state, languages });

      return {
        ...state,
        languages,
        feedback,
      };
    }

    case RESET:
      return { ...initialState };

    default:
      return state;
  }
};
