import styled, { css } from 'styled-components';
import Link from 'next/link';

export const PaginationContainer = styled.nav`
  display: flex;
  width: auto;
  height: 32px;
  margin: 0 auto;
  margin-top: 48px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Pagination = styled.ul`
  display: flex;
  gap: 3px;
`;

const activeStyles = css`
  color: #272626;
  background: #e4d5c2;
  border: 1px solid #e4d5c2;
`;

const inactiveStyles = css`
  color: #959595;
`;

export const PageButton = styled.li<{ isCurrent: boolean }>`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;

  ${({ isCurrent }) => (isCurrent ? activeStyles : inactiveStyles)}
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
`;
