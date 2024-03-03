'use client';
import styled from 'styled-components';

export const SearchModal = styled.div`
  width: 600px;
  height: 610px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 20px 20px 20px;
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
  margin-top: 50px;
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

export const FullName = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 16px);
`;
