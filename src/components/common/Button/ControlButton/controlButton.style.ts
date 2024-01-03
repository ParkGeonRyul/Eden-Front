'use client';

import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'edit' | 'delete';
  children: string;
}

const commonStyles = css`
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  cursor: pointer;
`;

const editStyles = css`
  color: #6f6f6f;
`;

const deleteStyles = css`
  color: #de3636;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${commonStyles}
  ${({ type }) => (type === 'edit' ? editStyles : deleteStyles)}
`;
