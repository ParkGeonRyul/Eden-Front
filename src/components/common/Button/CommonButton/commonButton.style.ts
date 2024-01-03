'use client';

import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'primary' | 'secondary';
  wide?: boolean;
  isActive?: boolean;
  children: string;
}

const commonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 173px;
  padding: 19px 52px;

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;
`;

const basicStyles = css`
  width: 173px;
  padding: 19px 52px;
`;

const wideStyles = css`
  width: 520px;
  padding: 14px 216px;
`;

const primaryStyles = css`
  ${basicStyles}
  background-color: #e4d5c2;
  color: #000;
`;

const secondaryStyles = css`
  ${basicStyles}
  border: 1px solid #000;
`;

const primaryInactiveStyles = css`
  color: #939393;
  background: #eee;
  cursor: not-allowed;
`;

const secondaryInactiveStyles = css`
  border: 1px solid #d3d3d3;
  color: #b4b4b4;
  background: #fff;
  cursor: not-allowed;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${commonStyles}
  ${({ type, isActive }) =>
    type === 'primary'
      ? isActive
        ? primaryStyles
        : primaryInactiveStyles
      : isActive
      ? secondaryStyles
      : secondaryInactiveStyles}
  ${({ wide }) => wide && wideStyles}
`;
