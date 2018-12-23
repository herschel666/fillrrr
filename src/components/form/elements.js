import styled from 'styled-components';

import { medium } from '../../ui/_breakpoints';
import { danger, grey200 } from '../../ui/_colors';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';

export const FormLabel = styled(Label)`
  display: inline-flex;
`;

export const Input = styled.input`
  margin-right: 4px;
`;

export const Controls = styled.fieldset`
  padding: 16px;
  border: none;
  border-bottom: 1px solid ${grey200};

  ${FormLabel},
  ${Button} {
    margin-right: 16px;
  }
`;

export const Form = styled.form`
  margin-bottom: 32px;
`;

export const Feedback = styled.div`
  margin-top: 16px;
  color: ${danger};

  @media (min-width: ${medium}px) {
    margin-top: unset;
    display: inline;
  }
`;
