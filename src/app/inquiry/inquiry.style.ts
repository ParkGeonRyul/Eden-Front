'use client';

import styled from 'styled-components';

export const InquirySubtitle = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 61px;
`;

export const InquiryBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const InquiryEssential = styled.div<{
  position?: 'left' | 'right';
}>`
  display: flex;
  display: flex;
  flex-direction: row-reverse;
  flex-direction: ${({ position }) =>
    position === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
`;

export const InquiryForm = styled.div`
  display: flex;
  height: 632px;
  padding: 32px 0 80px;
  border-top: solid 1px #4b4b4b;
  border-bottom: solid 1px #4b4b4b;
`;

export const InquiryInformation = styled.div`
  width: 200px;
  font-size: 22.5px;
  font-wei
`;

export const InquiryType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 27px;
`;

export const InquiryDisplay = styled.div`
  display: flex;
`;

export const InquiryInfoTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 110px;
  gap: 5px;
`;

export const InputTitle = styled.input`
  width: 770px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
  outline: none;
`;

export const InputContent = styled.textarea`
  width: 770px;
  height: 170px;
  resize: none;
  padding: 15.5px 9px;
  margin-bottom: 16px;
  border: 1px solid #cdcdcd;
  outline: none;
`;

export const InputLetters = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const InputName = styled.input`
  width: 276px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
  outline: none;
  margin-right: 40px;
`;

export const InputEmail = styled.input`
  width: 235px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
  margin-right: 16px;
  outline: none;
`;

export const At = styled.span`
  font-size: 17px;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const AgreeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 31px 0 72px;
`;

export const Agree = styled.div`
  font-size: 22.5px;
  font-weight: 500;
  padding-right: 135px;
`;

export const ViewContent = styled.span`
  color: #6f6f6f;
  font-size: 15px;
  border-bottom: 1px solid #6f6f6f;
  margin-left: 16px;
`;

export const InquiryButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 36.5px;
`;

export const SpanDot = styled.div`
  color: #ff0000;
  margin: 5px;
  width: 4px;
  height: 4px;
  background-color: #ff0000;
  border-radius: 50%;
`;
