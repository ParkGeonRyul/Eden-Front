'use client';

import { css, styled } from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  height: 460px;
  padding: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background-color: white;
`;

export const ModalHeading = styled.div`
  color: #1b1b1b;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

export const ModalTitle = styled.div`
  font-size: 32px;
  margin-bottom: 45px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 32px;
  border: none;
  border-bottom: 1px solid #c0c0c0;
  &:focus {
    outline: none;
  }
`;

export const InputTitle = styled.span`
  align-self: flex-start;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 15px;
`;

export const Count = styled.div`
  position: absolute;
  right: 0;
  color: #5d8554;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
`;
