import styled from 'styled-components';

export const FileInputButton = styled.button`
  font-size: 14px;
  color: #707070;
  border: 1px solid #707070;
  padding: 14.5px 50px;
  pointer: cursor;
`;

const ACCEPTED_FILE_TYPES = 'image/*, video/*';

export const HiddenFileInput = styled.input.attrs({
  type: 'file',
  accept: ACCEPTED_FILE_TYPES,
})`
  display: none;
`;
