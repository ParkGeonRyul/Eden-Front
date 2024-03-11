'use client';

import styled from 'styled-components';

export const InquiryModal = styled.div`
  width: 540px;
  height: 310px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
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
  height: 45px;
  font-size: 32px;
  margin: 50px 24px;
  text-align: center;
`;

export const ModalContent = styled.div`
  font-size: 16px;
  white-space: pre-line;
  padding: 0 16px;
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  /* margin: 20px 0; // 상하 여백 설정 */
`;
