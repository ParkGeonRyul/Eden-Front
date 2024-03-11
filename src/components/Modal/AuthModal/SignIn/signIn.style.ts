'use client';

import styled from 'styled-components';

export const OpenBtn = styled.button``;

export const BackGround = styled.div`
  width: 620px;
  height: 550px;
  padding: 50px;
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
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputBox = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputText = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 5px 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c0c0c0;
  outline: none;
`;

export const BtnBox = styled.button`
  margin: 50px 0 20px;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
