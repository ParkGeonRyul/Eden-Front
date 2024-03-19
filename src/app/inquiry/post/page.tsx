'use client';

import { useEffect, useState } from 'react';
import Label from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';
import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import axios from 'axios';
import AnswerContent from '../_components/AnswerContent/AnswerContent';
import SearchModal from '../_components/SearchModal/SearchModal';
import * as S from './post.style';

const Post = ({ searchParams }) => {
  // F
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
            <S.UserName> 이름</S.UserName>/<S.UserEmail> 이메일</S.UserEmail>
          </S.UserInfo>
        </S.HeaderContainer>

        <S.InquiryBody>
          Lorem ipsum dolor sit amet consectetur. Ultrices tristique a elit
          tempor diam amet. Suscipit arcu bibendum malesuada tincidunt erat
          nulla turpis fermentum velit. Aliquam quam enim morbi orci turpis amet
          adipiscing justo. Id turpis nibh arcu phasellus imperdiet.
        </S.InquiryBody>
      </S.InquiryDetailContainer>
      <AnswerContent />
    </Mainpage>
  );
};
export default Post;
