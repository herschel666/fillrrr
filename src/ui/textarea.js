import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';
import { grey300, grey500, grey600 } from './_colors';

export const Textarea = styled(TextareaAutosize)`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  font-family: inherit;
  font-size: 14px;
  line-height: inherit;
  color: ${grey500};
  border: 1px solid ${grey300};
  border-radius: 2px;
  resize: vertical;

  :hover {
    color: ${grey600};
  }

  :focus {
    outline: none;
    border-color: ${grey500};
    color: inherit;
  }
`;
