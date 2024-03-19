'use client';

import { useEffect, useState } from 'react';
import { InquiryPost } from '@/types/apis/userInquiry';
import InquiryDetail from '../_components/Inquiry/InquiryDetail/InquiryDetail';
import InquiryList from '../_components/Inquiry/InquiryList/InquiryList';
import * as S from './inquiry.style';

export default function Page() {
  const [inquiryData, setInquiryData] = useState<InquiryPost | null>(null);
  const [inquiryUniqueId, setInquiryUniqueId] = useState('');

  useEffect(() => {
    //TODO react-query로 변경 및 api 분리
    const fetchInquiry = async () => {
      try {
        const inquiryData = await fetch(
          // `/mypage/inquiry?inquiryId=${inquiryUniqueId}`
          `/mock/userInquiry${inquiryUniqueId}.json`,
          {
            credentials: 'include',
          },
        );
        const result = await inquiryData.json();
        setInquiryData(result);
        setInquiryUniqueId(result.inquiryUniqueId);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchInquiry();
  }, [inquiryUniqueId]);

  console.log('inquiryUniqueId', inquiryUniqueId);

  return (
    <S.InquiryContainer>
      {inquiryData === null ? (
        <S.NotInquiry>문의한 글이 없어요.</S.NotInquiry>
      ) : (
        <S.InquiryBox>
          <S.InquiryWrapper key={inquiryData.inquiryUniqueId}>
            <InquiryDetail inquiry={inquiryData}></InquiryDetail>
            {inquiryData.answerStatus ? (
              <S.ReviewContainer>
                <S.ReviewHeader>
                  <S.ReviewTitle>admin</S.ReviewTitle>
                  <S.ReviewInfo>
                    <S.Date>{inquiryData.answerUpdatedAt}</S.Date>
                  </S.ReviewInfo>
                </S.ReviewHeader>
                <S.ReviewBody>{inquiryData.answer}</S.ReviewBody>
              </S.ReviewContainer>
            ) : (
              <S.AnswerContainer>
                <S.AnswerWriteBox>답변이 아직 없습니다.</S.AnswerWriteBox>
              </S.AnswerContainer>
            )}
          </S.InquiryWrapper>

          <InquiryList setInquiryUniqueId={setInquiryUniqueId} />
        </S.InquiryBox>
      )}
    </S.InquiryContainer>
  );
}
