import React from 'react';
import AnswerStatusLabel from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';
import { InquiryPost } from '@/types/apis/userInquiry';
import * as S from './inquiryDetail.style';

interface InquiryDetailProps {
  inquiry: InquiryPost;
}

const InquiryDetail: React.FC<InquiryDetailProps> = ({ inquiry }) => (
  <S.InquiryDetailContainer>
    <S.HeaderContainer>
      <S.InquiryHeader>
        <S.InquiryTitle>{inquiry.title}</S.InquiryTitle>
        <S.InquiryInfo>
          <S.Date>{inquiry.inquiryCreatedAt}</S.Date>
          <AnswerStatusLabel type={inquiry.answerStatus ? 'done' : 'hold'}>
            답변대기
          </AnswerStatusLabel>
        </S.InquiryInfo>
      </S.InquiryHeader>
    </S.HeaderContainer>

    <S.InquiryBody>{inquiry.content}</S.InquiryBody>
  </S.InquiryDetailContainer>
);

export default InquiryDetail;
