import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { large } from '../../ui/_breakpoints';
import { grey200 } from '../../ui/_colors';

const Main = styled.main`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1000px;

  @media (min-width: ${large}px) {
    border-width: 0 1px;
    border-style: solid;
    border-color: ${grey200};
  }
`;

export const Wrapper = ({ children }) => <Main>{children}</Main>;

Wrapper.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};
