import styled from 'styled-components';

import { large } from '../../ui/_breakpoints';
import { light, grey200, grey500, grey700 } from '../../ui/_colors';
import { IconChevronDown } from '../../ui/icon-chevron-down';
import { BaseButton } from '../../ui/base-button';

export const Wrapper = styled.div`
  padding: 16px;

  @media (min-width: ${large}px) {
    border-bottom: 1px solid ${grey200};
  }
`;

export const ToggleIconElem = styled(IconChevronDown.Elem)`
  width: 20px;
  color: ${grey500};
`;

export const RotatedToggleIconElem = styled(ToggleIconElem)`
  transform: rotate(180deg);
`;

export const TopBar = styled(BaseButton)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: ${light};

  :hover,
  :focus-visible {
    background: ${grey200};

    ${ToggleIconElem},
    ${RotatedToggleIconElem} {
      color: ${grey700};
    }
  }
`;

export const Detail = styled.div`
  padding: 8px;
  border: 1px solid ${grey200};
  border-top: none;
`;
