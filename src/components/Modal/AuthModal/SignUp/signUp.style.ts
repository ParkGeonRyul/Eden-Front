'use client';

import styled from 'styled-components';

export const BackGround = styled.div`
  width: 580px;
  height: 790px;
  padding: 50px;
  position: relative;
  background-color: white;
  border: 1px solid #4f4f4f;
  overflow: scroll;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Header = styled.div`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SpanDot = styled.div`
  color: #ff0000;
  margin: 5px;
  width: 4px;
  height: 4px;
  background-color: #ff0000;
  border-radius: 50%;
`;

export const InfoHead = styled.div`
  margin-top: 3px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const InputCategory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 2px;
`;

export const CategoryName = styled.div``;

export const InputContent = styled.input`
  width: 100%;
  height: 35px;
  padding: 5px 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c0c0c0;
  outline: none;
`;

export const NameCategory = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
`;

export const CertifiedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Timer = styled.div`
  position: absolute;
  right: 0;
  color: #5d8554;
  text-align: center;
`;

export const AgreeMentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AgreeMentInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const AgreeMentText = styled.div``;

export const SpanColor = styled.span`
  color: green;
`;

export const AgreeMentBtn = styled.button`
  color: #a9a9a9;
`;

export const SignUpBtnBox = styled.div`
  margin-top: 20px;
  display: flex;
`;
