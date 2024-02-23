'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

interface HeaderProps {
  isHeaderOpen: boolean;
}

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
`;

const headerOpenStyles = css`
  background: #ffffff;
`;

export const Header = styled.header<HeaderProps>`
  height: 80px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 22px 70px;
  background: #e4d5c2;
  ${({ isHeaderOpen }) => isHeaderOpen && headerOpenStyles}
  transition: all 0.4s ease-in-out;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 58px;
  align-items: center;
  font-size: 16px;
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
  top: 80px;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  max-height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}px`};
  background-color: white;
  transition: all 0.4s ease-in-out;
`;
