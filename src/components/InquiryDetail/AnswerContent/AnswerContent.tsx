'use client';

import React, { useState } from 'react';
import ControlButton from '@/components/common/Button/ControlButton/ControlButton';
import * as S from './answerConten.style';

const AnswerContent = () => {
  const [answerText, setAnswerText] = useState('');
  const [showReviewContainer, setShowReviewContainer] = useState(false);
  const [showAnswerContainer, setShowAnswerContainer] = useState(true);

  const hasText = answerText.trim().length > 0;

  const handleAnswerButtonClick = () => {
    if (hasText) {
    }
    setShowReviewContainer(true);
    // input에 입력된 값을 백앤드로 보내주는 함수 추가
    setShowAnswerContainer(false);
  };

  return (
    <>
      <S.AnswerContainer answerWrite={showAnswerContainer}>
        <S.AnswerWriteBox
          placeholder="답변을 적어주세요"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}></S.AnswerWriteBox>
        <S.AnswerButton
          isEmpty={hasText}
          onClick={() => handleAnswerButtonClick()}>
          {hasText ? '답변하기' : '답변하기'}
        </S.AnswerButton>
      </S.AnswerContainer>
      <S.ReviewContainer reviewWrite={!showReviewContainer}>
        <S.ReviewHeader>
          <S.ReviewTitle>admin</S.ReviewTitle>
          <S.ReviewInfo>
            <S.ButtonBox>
              <ControlButton type="edit"></ControlButton>
              {/* 답변 수정 기능 */}
              <ControlButton type="delete"></ControlButton>
              {/* 답변 삭제 기능 */}
            </S.ButtonBox>
            <S.Date>23.11.28</S.Date>
          </S.ReviewInfo>
        </S.ReviewHeader>

        <S.ReviewBody>
          고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래
          귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는
          원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래
          귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는
          원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래
          귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.
          {/* handleAnswerButtonClick으로 백앤드로 전달 후 다시 받아와서 저장되게?? */}
        </S.ReviewBody>
      </S.ReviewContainer>
    </>
  );
};

export default AnswerContent;
