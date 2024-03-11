'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const SubTitle = styled.div`
  text-align: center;
  margin: 30px auto 55px;
`;

export const ContainerLine = styled.div`
  border-top: 1px solid black;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 95px;
  display: flex;
  gap: 70px;
`;

export const ImgContainer = styled.div``;

export const StyleImage = styled(Image)``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Head = styled.div`
  font-size: 32px;
`;
export const Name = styled.div`
  margin-bottom: 15px;
  font-size: 24px;
`;
export const Info = styled.span`
  font-size: 16px;
`;
export const Additional = styled.div`
  margin: 20px 0;
`;

export const Bold = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
