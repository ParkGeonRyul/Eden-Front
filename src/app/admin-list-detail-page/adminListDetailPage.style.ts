'use client';
import styled from 'styled-components';

export const AdminListDetailPage = styled.div`
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 60.703px;
  font-weight: 300;
  margin: 97px 0 127px 0;
`;

export const InquiryDetailContainer = styled.div`
  width: 907px;
  margin: auto;
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
`;
export const InquiryDate = styled.div`
  color: #6f6f6f;
  font-size: 15px;
  font-weight: 400;
  padding-right: 26px;
`;
export const InquiryState = styled.div`
  width: 96px;
  height: 40px;
  background: #c7c7c7;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;

  // border: 1px solid #5d8554;
  // background: #5d8554;
`;
export const UserInfo = styled.div`
  color: #909090;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 15.6px;
  display: flex;
`;
export const UserName = styled.div`
  padding-right: 6px;
`;
export const UserEmail = styled.div`
  padding-left: 6px;
`;

export const InquiryBody = styled.div`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 67px;
`;

export const ReviewContainer = styled.div`
  width: 907px;
  margin: auto;
  border-top: 1px solid #d4d4d4;
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 51px 0;
  padding: 28px 0;
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
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    line-height: 16.8px;
    padding-top: 2px;
  }
`;

export const AnswerButton = styled.button`
  width: 96px;
  height: 40px;
  border: 1px solid #5d8554;
  background: #5d8554;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
`;

export const ReviewInfo = styled.div`
  display: flex;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const ModifyButton = styled.button`
  color: #5d8554;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
`;

export const DeleteButton = styled.button`
  color: #ee5454;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
`;

export const ReviewDate = styled.div`
  color: var(--Grey60, #999);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-left: 25.91px;
`;

export const ReviewBody = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
`;

export const ViewsBox = styled.div`
  border-radius: 12px;
  border: 1px solid #5d8554;
  background: #fff;
  display: inline-flex;
  padding: 16px 27px 15px 26px;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  margin: 94px 0 35px 5vh;
`;

export const InquiryTable = styled.div`
  width: 907px;
  margin: 87px auto 0 auto;
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

export const TableList = styled.div``;

export const ListCategory = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bcbcbc;
`;

export const WriteList = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
`;

export const ListInfo = styled.div`
  width: 400px;
  gap: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const ListTitle = styled.div`
  color: #bcbcbc;
  font-size: 17px;
  font-weight: 500;
`;

export const ListState = styled.div`
  color: #bcbcbc;
  font-size: 17px;
  font-weight: 500;
  width: 100px;
  text-align: center;
`;

export const ListDate = styled.div`
  color: #bcbcbc;
  font-size: 17px;
  font-weight: 500;
  width: 100px;
  text-align: end;
`;

export const WriteTitle = styled.div`
  color: #7b7b7b;
  font-size: 17px;
  font-weight: 500;
`;

export const WriteStateComplete = styled.div`
  color: #6f6f6f;
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  text-align: center;
`;

export const WriteStateWait = styled.div`
  color: #de2e5f;
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  text-align: center;
`;

export const WriteDate = styled.div`
  color: #bcbcbc;
  font-size: 16px;
  font-weight: 500;
  width: 100px;
  text-align: end;
`;
