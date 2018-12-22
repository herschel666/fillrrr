import styled from 'styled-components';

import { grey200 } from '../../ui/_colors';
import { Label } from '../../ui/label';

export const FormLabel = styled(Label)`
  margin: 0 8px;
  display: inline-flex;
`;

export const Input = styled.input`
  margin-right: 8px;
`;

export const Controls = styled.fieldset`
  padding: 0 8px;
  margin: 0 0 16px 0;
  border: none;
  border-bottom: 1px solid ${grey200};
`;

export const Form = styled.form`
  margin-bottom: 32px;
  border-bottom: 1px solid ${grey200};
`;

export const InputWrapper = styled.div`
  padding: 0 16px 16px 16px;
`;
