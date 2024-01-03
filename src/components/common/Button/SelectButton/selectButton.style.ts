'use client';

import styled, { css } from 'styled-components';

interface ButtonProps {
  isSelected?: boolean;
  children: string;
}

const commonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98px;
  padding: 7px 24px;

  font-family: Noto Sans KR;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;

  cursor: pointer;
`;

const nonSelectedStyles = css`
  border: 1px solid #e0e0e0;
  color: #616161;
  background: #f7f9fb;
`;

const selectedStyles = css`
  color: #fff;
  background: #5d8554;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${commonStyles}
  ${({ isSelected }) => (isSelected ? selectedStyles : nonSelectedStyles)}
`;
