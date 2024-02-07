'use client';
import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 120px;
  border-top: 1px solid #d4d4d4;
`;

export const HeaderContainer = styled.div`
  margin: 47px 0;
`;

export const InquiryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const InquiryTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

export const InquiryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const Date = styled.div`
  color: #6f6f6f;
  font-size: 15px;
  font-weight: 400;
`;

export const UserInfo = styled.div`
  color: #909090;
  font-size: 16px;
  font-weight: 400;
  line-height: 15.6px;
  display: flex;
  gap: 6px;
`;

export const UserName = styled.p``;

export const UserEmail = styled.p``;

export const InquiryBody = styled.div`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 67px;
`;
