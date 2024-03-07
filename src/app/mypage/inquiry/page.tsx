'use client';

import { useEffect, useState } from 'react';
import { InquiryPost, InquiryPostList } from '@/types/apis/userInquiry';
import InquiryDetail from '../_components/Inquiry/InquiryDetail/InquiryDetail';
import InquiryList from '../_components/Inquiry/InquiryList/InquiryList';
import * as S from './inquiry.style';

export default function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
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
      const inquiryListItemData = await fetch(
        `/mock/inquiryList${searchParams.page}.json`,
      );
      const result = await inquiryListItemData.json();
      setInquiryListItemData(result.data);
    };

    fetchInquiryList();
  }, [searchParams.page]);

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

          {inquiryListItemData && (
            <InquiryList inquiryListItemData={inquiryListItemData} />
          )}
        </S.InquiryBox>
      )}
    </S.InquiryContainer>
  );
}
