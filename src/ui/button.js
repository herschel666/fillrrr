import styled from 'styled-components';
import { primary, secondary } from './_colors';
import { BaseButton } from './base-button';

export const Button = styled(BaseButton)`
  color: white;
  background-color: ${({ type }) => (type === 'reset' ? secondary : primary)};

  :hover,
  :focus-visible {
    opacity: 0.7;
  }
`;
