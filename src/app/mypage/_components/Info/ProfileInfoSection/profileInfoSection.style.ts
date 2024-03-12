'use client';
import styled from 'styled-components';

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #d4d4d4;

  &:first-child {
    border-top: none;
  }
`;

export const InfoMenu = styled.div`
  width: 182px;
  color: #606060;
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  color: #373737;
`;

export const ProfileInstructions = styled.div`
  width: 500px;
  color: #a8a8a8;
`;

export const ProfileArea = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d9d9d9;

  cursor: pointer;
`;
