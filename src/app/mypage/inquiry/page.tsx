'use client';
import { useState, useEffect } from 'react';
import InquiryDetail from '../_components/Inquiry/InquiryDetail/InquiryDetail';
import InquiryList from '../_components/Inquiry/InquiryList/InquiryList';
import { InquiryPost, InquiryPostList } from '@/types/apis/userInquiry';
import * as S from './inquiry.style';

export default function Page() {
  const [inquiryData, setInquiryData] = useState<InquiryPost | null>(null);
  const [inquiryListItemData, setInquiryListItemData] =
    useState<InquiryPostList | null>(null);

  useEffect(() => {
    //TODO react-query로 변경 및 api 분리
    const fetchInquiry = async () => {
      const inquiryData = await fetch('/mock/userInquiry.json');
      const result = await inquiryData.json();
      setInquiryData(result);
    };

    fetchInquiry();
  }, []);

  useEffect(() => {
    //TODO react-query로 변경 및 api 분리
    const fetchInquiryList = async () => {
      const inquiryListItemData = await fetch('/mock/inquiryList.json');
      const result = await inquiryListItemData.json();
      setInquiryListItemData(result.data);
    };

    fetchInquiryList();
  }, []);

  return (
    <S.InquiryContainer>
      {inquiryData === null ? (
        <S.NotInquiry>문의한 글이 없어요.</S.NotInquiry>
      ) : (
        <S.InquiryBox>
          <S.InquiryWrapper>
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

          {inquiryListItemData && (
            <InquiryList inquiryListItemData={inquiryListItemData} />
          )}
        </S.InquiryBox>
      )}
    </S.InquiryContainer>
  );
}
