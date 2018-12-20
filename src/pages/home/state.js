import { LANGUAGES } from '../../constants';

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

export const reducer = (state, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        filledTexts: action.payload.filledTexts,
      };

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
      return {
        ...state,
        languages,
      };
    }

    case RESET:
      return { ...initialState };

    default:
      return state;
  }
};
