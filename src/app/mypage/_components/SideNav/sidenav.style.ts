'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const SideBar = styled.div`
  position: fixed;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const TabSection = styled(Link)`
  width: auto;
  padding: 16px 0;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TabIcon = styled.div<{ isCurrentPage: boolean }>`
  width: 24px;
  height: 24px;

  svg path {
    fill: ${({ isCurrentPage }) => (isCurrentPage ? 'black' : '#84828A')};
  }
`;

export const TabMenu = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #000;
`;
