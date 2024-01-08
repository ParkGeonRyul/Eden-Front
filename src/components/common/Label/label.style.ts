'use client';

import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'hold' | 'done';
  children: string;
}

const commonStyles = css`
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;

  color: #000;
  cursor: pointer;
`;

const holdeStyles = css`
  color: #de3636;
`;

const doneStyles = css`
  color: #6f6f6f;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${commonStyles}
  ${({ type }) => (type === 'hold' ? holdeStyles : doneStyles)}
`;
