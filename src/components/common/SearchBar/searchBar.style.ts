'use client';
import styled from 'styled-components';

export const Container = styled.div`
  width: 372px;
  height: 60px;
  padding: 15px 25px;
  margin: auto;
  border-radius: 40px;
  border: 1px solid #d4d4d4;
  background: #fff;
  display: flex;
  align-items: center;
`;

export const InputBox = styled.input`
  width: 100%;
  border: none;

  &::placeholder {
    color: #c9c9c9;
    font-size: 17px;
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }
`;

export const BtnBox = styled.div`
  width: 30px;
  height: 30px;
`;
