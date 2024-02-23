import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'primary' | 'secondary';
  wide?: boolean;
  isActive?: boolean;
  children: string;
}

const basicStyles = css`
  width: 173px;
  padding: 19px;
`;

const wideStyles = css`
  width: 520px;
  padding: 14px;
`;

const primaryStyles = css`
  background-color: #e4d5c2;
  color: #000;
`;

const secondaryStyles = css`
  border: 1px solid #000;
`;

const typeMap = {
  primary: primaryStyles,
  secondary: secondaryStyles,
};

const primaryInactiveStyles = css`
  color: #939393;
  background: #eee;
`;

const secondaryInactiveStyles = css`
  border: 1px solid #d3d3d3;
  color: #b4b4b4;
  background: #fff;
`;

const inactiveStyles = ({ type }: ButtonProps) => css`
  cursor: not-allowed;

  ${type === 'primary' ? primaryInactiveStyles : secondaryInactiveStyles}
`;

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  ${({ type }) => typeMap[type]}
  ${({ wide }) => (wide ? wideStyles : basicStyles)}
  ${({ isActive }) => !isActive && inactiveStyles}
`;
