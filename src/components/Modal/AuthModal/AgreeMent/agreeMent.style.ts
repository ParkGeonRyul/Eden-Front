'use client';
import styled from 'styled-components';

interface RequiredState {
  required: boolean;
}

export const BackGround = styled.div`
  width: 580px;
  height: 690px;
  padding: 50px 0;
  position: relative;
  background-color: white;
  border: 1px solid #4f4f4f;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Header = styled.div`
  font-size: 32px;
`;

export const MainContainer = styled.div``;

export const AllAgreeMentContainer = styled.div`
  padding: 0 50px 0 38px;
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 2px solid #7a7a7a;
`;

export const AllAgreeMentBox = styled.div`
  display: flex;
  align-items: center;
`;

export const AllAgreeMentName = styled.div`
  font-size: 17px;
  margin-top: 2px;
`;

export const AllAgreeMentInfo = styled.div`
  margin-left: 44px;
  text-align: start;
  font-size: 15px;
  color: #7a7a7a;
`;

export const AgreeMentItem = styled.div`
  padding: 10px 50px 13px;
  border-bottom: 1px solid #7a7a7a;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemValue = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 3px;
`;

export const ItemName = styled.div``;

export const ItemRequired = styled.span<RequiredState>`
  color: ${(props) => (props.required ? 'green' : 'grey')};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Agree = styled.div`
  margin-top: 3px;
`;

export const ButtonContainer = styled.div`
  height: 150px;
  padding: 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
