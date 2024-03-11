'use client';

import { css, styled } from 'styled-components';

interface InfoContentProps {
  active: boolean;
}

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #d4d4d4;

  &:first-child {
    border-top: none;
  }

  &:last-child {
    padding: 20px 0 0 0;
  }
`;

export const InfoMenu = styled.div`
  width: 182px;
  color: #606060;
`;

const disabledStyles = css`
  disabled: true;
  cursor: not-allowed;
`;

export const InfoContent = styled.input<InfoContentProps>`
  width: 500px;
  display: flex;
  align-items: center;
  color: #373737;
  border: none;
  outline: none;

  ${(props) => !props.active && disabledStyles}
`;
