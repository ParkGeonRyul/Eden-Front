'use client;';

import styled from 'styled-components';

export const Display = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 110px;
`;

export const TypeChoice = styled.select`
  width: 235px;
  height: 52px;
  padding: 15.5px 9px;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="18px" height="18px"><path d="M7 10l5 5 5-5z" /></svg>');
  background-position: right 10px top 50%;
  padding-right: 27px;
  border: 1px solid #cdcdcd;
  outline: none;
`;
