'use client';

import React, { useState } from 'react';
import ControlButton from '@/components/common/Button/ControlButton/ControlButton';
import Label from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';
import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import * as S from './post.style';

const Post = () => {
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
    <Mainpage>
      <PageTitle>PET</PageTitle>

      <S.InquiryDetailContainer>
        <S.HeaderContainer>
          <S.InquiryHeader>
            <S.InquiryTitle>우리집 고양이 정모래</S.InquiryTitle>
            <S.InquiryInfo>
              <S.Date>23.10.19</S.Date>
              <Label type="hold">답변대기</Label>
              {/* 입력한 댓글을 서버에 전달 한 후 상태변화되도록 하는방법은? */}
            </S.InquiryInfo>
          </S.InquiryHeader>

          <S.UserInfo>
            <S.UserName>이름</S.UserName>/<S.UserEmail>이메일</S.UserEmail>
          </S.UserInfo>
        </S.HeaderContainer>

        <S.InquiryBody>
          Lorem ipsum dolor sit amet consectetur. Ultrices tristique a elit
          tempor diam amet. Suscipit arcu bibendum malesuada tincidunt erat
          nulla turpis fermentum velit. Aliquam quam enim morbi orci turpis amet
          adipiscing justo. Id turpis nibh arcu phasellus imperdiet.
        </S.InquiryBody>
      </S.InquiryDetailContainer>

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

      <S.InquiryTable>
        <S.TableHeader>
          <S.TableTitle>전체보기</S.TableTitle>
          <S.TableCount>n개의 문의</S.TableCount>
        </S.TableHeader>

        <S.TableList>
          <S.ListCategory>
            <S.ListTitle>글제목</S.ListTitle>
            <S.ListInfo>
              <S.ListState>답변여부</S.ListState>
              <S.ListDate>작성일</S.ListDate>
            </S.ListInfo>
          </S.ListCategory>

          <S.WriteList>
            <S.WriteTitle>문의제목</S.WriteTitle>
            <S.ListInfo>
              <S.ListState>
                <Label type="done">답변완료</Label>
              </S.ListState>
              <S.ListDate>
                <S.Date>23.12.19</S.Date>
              </S.ListDate>
            </S.ListInfo>
          </S.WriteList>
        </S.TableList>
      </S.InquiryTable>
    </Mainpage>
  );
};

export default Post;
