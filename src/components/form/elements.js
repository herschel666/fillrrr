import styled from 'styled-components';

import { grey200 } from '../../ui/_colors';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';

export const FormLabel = styled(Label)`
  display: inline-block;
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
