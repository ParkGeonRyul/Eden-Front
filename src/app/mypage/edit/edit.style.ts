'use client';

import styled from 'styled-components';

export const Mypage = styled.div`
  box-sizing: border-box;
  margin: 102px 70px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 54px;
  min-width: 846px;
  @media (max-width: 1500px) {
    margin-left: 280px;
  }
`;

export const InfoBox = styled.div`
  width: 798px;
  padding: 22px 24px 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #c7c7c7;
  font-family: Pretendard;
`;

export const InfoHead = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  color: #000;
`;

export const InfoSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 36px;
`;
