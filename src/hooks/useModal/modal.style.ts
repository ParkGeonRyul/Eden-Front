'use client';

import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
`;
