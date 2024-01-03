'use client';

import styled, { css } from 'styled-components';

interface ButtonProps {
  children: string;
}

const commonStyles = css`
  width: 79px;
  height: 35px;
  flex-shrink: 0;
  border: 1px solid #5d8554;

  color: #5d8554;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;

  cursor: pointer;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${commonStyles}
`;
