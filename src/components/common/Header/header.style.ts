('use client');

import styled, { css, keyframes } from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 30px 60px 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const CategoryBox = styled.div<{ height: string | number }>`
  position: absolute;
  top: ${({ theme }) => theme.constants.headerHeight};
  overflow: hidden;
  width: 100%;
  height: fit-content;
  max-height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}px`};
  background-color: white;
  transition: all 0.4s ease-in-out;
`;
