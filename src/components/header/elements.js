import styled from 'styled-components';

import { dark } from '../../ui/_colors';

export const Header = styled.header`
  padding: 8px 0;
  background-color: ${dark};
`;

export const Title = styled.span`
  display: block;
  font-size: 24px;
  color: white;
  text-align: center;
  letter-spacing: 12px;
  text-shadow: 0 1px 1px black;
  user-select: none;
`;
