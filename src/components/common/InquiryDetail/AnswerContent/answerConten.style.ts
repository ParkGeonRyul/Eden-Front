'use client';
import styled, { css } from 'styled-components';

export const AnswerContainer = styled.div<{ answerWrite: boolean }>`
  width: 100%;
  margin: 51px auto;
  border-top: 1px solid #d4d4d4;
  display: ${(props) => (props.answerWrite ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 55px 0 25px 0;
`;

export const ReviewContainer = styled.div<{ reviewWrite: boolean }>`
  width: 100%;
  margin: 51px auto;
  border-top: 1px solid #d4d4d4;
  display: ${(props) => (props.reviewWrite ? 'none' : 'block')};
`;

export const AnswerWriteBox = styled.textarea`
  width: 85%;
  max-height: 40px;
  white-space: pre-wrap;
  overflow-y: hidden;
  resize: none;
  border: 0px;
  padding: 10px 5px;

  &::placeholder {
    color: #8c8c8c;
    font-size: 16px;
    font-weight: 400;
    line-height: 16.8px;
    padding-top: 2px;
  }
`;

const emptyButton = css`
  background-color: #e4d5c2;
  color: #000;
  cursor: 'pointer';
`;

const notEmpty = css`
  background-color: #eee;
  color: #939393;
  cursor: 'not-allowed';
`;

export const AnswerButton = styled.button<{ isEmpty?: boolean }>`
  width: 96px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  ${(props) => (props.isEmpty ? emptyButton : notEmpty)}
`;

export const ReviewHeader = styled.div`
  margin: 55px 0 29px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const ReviewInfo = styled.div`
  display: flex;
  gap: 25px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const Date = styled.div`
  color: #6f6f6f;
  font-size: 15px;
  font-weight: 400;
`;

export const ReviewBody = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
`;
