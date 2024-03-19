import React from 'react';
import AnswerStatusLabel from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';
import { InquiryPostListItem } from '@/types/apis/userInquiry';
import * as S from './inquiryListItem.style';

interface InquiryListItemProps {
  item: InquiryPostListItem;
  setInquiryUniqueId: (state: string) => void;
}

const InquiryListItem: React.FC<InquiryListItemProps> = ({
  item,
  setInquiryUniqueId,
}) => {
  const handleInquiry = (inquiryId: string) => {
    setInquiryUniqueId(inquiryId);
  };
  return (
    <S.WriteList>
      <S.WriteTitle onClick={() => handleInquiry(item.inquiryUniqueId)}>
        {item.title}
      </S.WriteTitle>
      <S.ListInfo>
        <S.ListState>
          <AnswerStatusLabel
            type={item.answerStatus === true ? 'done' : 'hold'}>
            {item.answerStatus === true ? '답변완료' : '답변대기'}
          </AnswerStatusLabel>
        </S.ListState>
        <S.ListDate>
          <S.Date>{item.inquiryCreatedAt}</S.Date>
        </S.ListDate>
      </S.ListInfo>
    </S.WriteList>
  );
};

export default InquiryListItem;
