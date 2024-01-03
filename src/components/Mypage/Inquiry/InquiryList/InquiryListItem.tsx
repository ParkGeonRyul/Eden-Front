import React from 'react';
import AnswerStatusLabel from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';
import { InquiryPost } from '@/types/apis/userInquiry';
import * as S from './inquiryListItem.style';

interface InquiryListItemProps {
  post: InquiryPost;
}

const InquiryListItem: React.FC<InquiryListItemProps> = ({ post }) => (
  <S.WriteList>
    <S.WriteTitle>{post.content}</S.WriteTitle>
    <S.ListInfo>
      <S.ListState>
        <AnswerStatusLabel type={post.answerStatus === true ? 'done' : 'hold'}>
          {post.answerStatus === true ? '답변완료' : '답변대기'}
        </AnswerStatusLabel>
      </S.ListState>
      <S.ListDate>
        <S.Date>{post.createdAt}</S.Date>
      </S.ListDate>
    </S.ListInfo>
  </S.WriteList>
);

export default InquiryListItem;
