'use client';

import styled from 'styled-components';

export const InquiryDetailContainer = styled.div`
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

export const AnswerContainer = styled.div<{ answerWrite: boolean }>`
  width: 100%;
  margin: 51px auto;
  border-top: 1px solid #d4d4d4;
  display: ${(props) => (props.answerWrite ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 55px 0 25px 0;
`;

export const ReviewContainer = styled.div<{ reviewWrite: boolean }>`
  width: 100%;
  margin: 51px auto;
  border-top: 1px solid #d4d4d4;
  display: ${(props) => (props.reviewWrite ? 'none' : 'block')};
`;

export const AnswerWriteBox = styled.textarea`
  width: 85%;
  max-height: 40px;
  white-space: pre-wrap;
  overflow-y: hidden;
  resize: none;
  border: 0px;
  padding: 10px 5px;

  &::placeholder {
    color: #8c8c8c;
    font-size: 16px;
    font-weight: 400;
    line-height: 16.8px;
    padding-top: 2px;
  }
`;

export const AnswerButton = styled.button<{ isEmpty?: boolean }>`
  width: 96px;
  height: 40px;
  background: ${(props) => (props.isEmpty ? '#e4d5c2' : '#eee')};
  color: ${(props) => (props.isEmpty ? '#000' : '#939393')};
  cursor: ${(props) => (props.isEmpty ? 'pointer' : 'not-allowed')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
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

export const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const ReviewBody = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
`;

export const InquiryTable = styled.div`
  width: 100%;
  margin: 87px auto 0;
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

export const TableTitle = styled.div`
  color: #777;
  font-size: 18px;
  font-weight: 700;
`;

export const TableCount = styled.div`
  color: #777;
  font-size: 18px;
  font-weight: 400;
`;

export const TableList = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

export const ListCategory = styled.div`
  color: #bcbcbc;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bcbcbc;
`;

export const ListTitle = styled.div``;

export const WriteTitle = styled.div``;

export const WriteList = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
`;

export const ListInfo = styled.div`
  width: 300px;
  gap: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const ListState = styled.div`
  width: 100px;
  text-align: center;
`;

export const ListDate = styled.div`
  width: 100px;
  text-align: end;
`;
