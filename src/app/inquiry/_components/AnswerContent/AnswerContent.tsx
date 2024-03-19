'use client';

import React, { useState } from 'react';
import * as S from './answerConten.style';

interface AnswerData {
  text: string;
  date: string;
}

const AnswerContent = () => {
  const [answerData, setAnswerData] = useState<AnswerData | null>(null);

  return (
    <S.ReviewContainer reviewWrite={!!answerData}>
      <S.ReviewHeader>
        <S.ReviewTitle>admin</S.ReviewTitle>

        {answerData && (
          <S.ReviewInfo>
            <S.Date>{answerData.date}</S.Date>
          </S.ReviewInfo>
        )}
      </S.ReviewHeader>
      <S.ReviewBody>
        {answerData ? answerData.text : '아직 답변이 달리지 않았습니다.'}
      </S.ReviewBody>
    </S.ReviewContainer>
  );
};

export default AnswerContent;
