('use client');

import styled from 'styled-components';
import Link from 'next/link';

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

export const CategoryLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 390px;
`;

export const CategoryLinkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  cursor: pointer;
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
