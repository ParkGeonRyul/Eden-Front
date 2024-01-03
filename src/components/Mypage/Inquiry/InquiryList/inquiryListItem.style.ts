'use client';
import styled from 'styled-components';

export const WriteList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
`;

export const WriteTitle = styled.div`
  cursor: pointer;
`;

export const ListInfo = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

export const ListState = styled.div`
  width: 100px;
  text-align: center;
`;

export const ListDate = styled.div`
  width: 100px;
  text-align: end;
`;

export const Date = styled.div`
  color: #6f6f6f;
  font-size: 15px;
  font-weight: 400;
`;
