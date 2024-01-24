'use client';

import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'edit' | 'delete' | 'editComplete' | 'cancel';
  children: string;
}

const editStyles = css`
  color: #5d8554;
`;

const deleteStyles = css`
  color: #ee5454;
`;

const editCompleteStyles = css`
  color: #5d8554;
`;

const cancelStyles = css`
  color: #6f6f6f;
`;

const typeMap = {
  edit: editStyles,
  delete: deleteStyles,
  editComplete: editCompleteStyles,
  cancel: cancelStyles,
};

export const StyledButton = styled.button<ButtonProps>`
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;

  ${({ type }) => typeMap[type]}
`;
