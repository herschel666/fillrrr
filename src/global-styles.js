import { createGlobalStyle } from 'styled-components';

import { dark } from './ui/_colors';

export const GlobalStyles = createGlobalStyle`
body {
  font: normal 100%/1.2 sans-serif;
  color: ${dark};
  background: white;
}
`;
