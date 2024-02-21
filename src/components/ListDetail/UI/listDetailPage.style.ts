'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const ListDetailContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 120px;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
`;

export const HeaderContainer = styled.div`
  margin: 47px 0;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const ListTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
`;
export const ListInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;
export const Date = styled.div`
  color: #6f6f6f;
  font-size: 15px;
  font-weight: 400;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 36px;
`;

export const StyledImage = styled(Image)``;

export const ListBody = styled.div`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 30px;
`;

export const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 18px;
`;

export const View = styled.div`
  font-size: 16px;
  color: #6f6f6f;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  display: flex;
`;
