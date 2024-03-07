'use client';

import styled from 'styled-components';

export const NotInquiry = styled.div`
  color: #a1a1a1;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const InquiryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;
  min-width: 907px;
  min-height: 364px;
  @media (max-width: 1500px) {
    margin-left: 280px;
  }
`;

export const InquiryBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InquiryWrapper = styled.div`
  width: 907px;
  height: auto;
`;

export const Date = styled.div`
  color: #6f6f6f;
  font-size: 15px;
  font-weight: 400;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 55px 0 25px 0;
  margin: 51px auto;
  border-top: 1px solid #d4d4d4;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  margin: 51px auto;
  border-top: 1px solid #d4d4d4;
`;

export const AnswerWriteBox = styled.div`
  width: 85%;
  max-height: 40px;
  padding: 10px 5px;
  white-space: pre-wrap;
  overflow-y: hidden;
  resize: none;
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 400;
  line-height: 16.8px;
  padding-top: 2px;
`;

export const ReviewHeader = styled.div`
  margin: 55px 0 29px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewTitle = styled.div`
  color: var(--Neutral-Dark-Darkest, #1f2024);
  font-size: 24px;
  font-weight: 600;
`;

export const ReviewInfo = styled.div`
  display: flex;
  gap: 25px;
`;

export const ReviewBody = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
`;
