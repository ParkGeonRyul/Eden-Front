'use client';
import { useState, useEffect } from 'react';
import InquiryDetail from '../_components/Inquiry/InquiryDetail/InquiryDetail';
import InquiryListItem from '../_components/Inquiry/InquiryList/InquiryListItem';
import { InquiryPostData } from '@/types/apis/userInquiry';
import * as S from './inquiry.style';

export default function Page() {
  const [inquiryData, setInquiryData] = useState<InquiryPostData | null>(null);

  useEffect(() => {
    //TODO react-query로 변경 및 api 분리
    const fetchUserInfo = async () => {
      const inquiryData = await fetch('/mock/userInquiry.json');
      const result = await inquiryData.json();
      setInquiryData(result);
    };

    fetchUserInfo();
  }, []);

  return (
    <S.InquiryContainer>
      {inquiryData === null ? (
        <S.NotInquiry>문의한 글이 없어요.</S.NotInquiry>
      ) : (
        <S.InquiryBox>
          <S.InquiryWrapper>
            <InquiryDetail inquiry={inquiryData}></InquiryDetail>
            {inquiryData.adminAnswer ? (
              <S.ReviewContainer>
                <S.ReviewHeader>
                  <S.ReviewTitle>admin</S.ReviewTitle>
                  <S.ReviewInfo>
                    <S.Date>{inquiryData.adminAnswer.createdAt}</S.Date>
                  </S.ReviewInfo>
                </S.ReviewHeader>
                <S.ReviewBody>{inquiryData.adminAnswer.content}</S.ReviewBody>
              </S.ReviewContainer>
            ) : (
              <S.AnswerContainer>
                <S.AnswerWriteBox>답변이 아직 없습니다.</S.AnswerWriteBox>
              </S.AnswerContainer>
            )}
          </S.InquiryWrapper>

          <S.InquiryTable>
            <S.TableHeader>
              <S.TableTitle>전체보기</S.TableTitle>
              <S.TableCount>
                {inquiryData.postList.length}개의 문의
              </S.TableCount>
            </S.TableHeader>

            <S.TableList>
              <S.ListCategory>
                <S.ListTitle>글제목</S.ListTitle>
                <S.ListInfo>
                  <S.ListState>답변여부</S.ListState>
                  <S.ListDate>작성일</S.ListDate>
                </S.ListInfo>
              </S.ListCategory>
              {inquiryData.postList.map((post) => (
                <InquiryListItem
                  key={post.postId}
                  post={post}></InquiryListItem>
              ))}
            </S.TableList>
          </S.InquiryTable>
        </S.InquiryBox>
      )}
    </S.InquiryContainer>
  );
}
