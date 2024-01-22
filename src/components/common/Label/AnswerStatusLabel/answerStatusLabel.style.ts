'use client';
import styled, { css } from 'styled-components';

interface LabelProps {
  type: 'hold' | 'done';
}

const holdeStyles = css`
  color: #de3636;
`;

const doneStyles = css`
  color: #6f6f6f;
`;

const typeMap = {
  hold: holdeStyles,
  done: doneStyles,
};

export const StyledLabel = styled.div<LabelProps>`
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;

  ${({ type }) => typeMap[type]}
`;
