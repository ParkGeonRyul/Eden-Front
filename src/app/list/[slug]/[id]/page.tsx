'use client';
import React, { useEffect, useState } from 'react';
import { ListItem } from '@/types/apis/listItem';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import * as S from './listDetail.style';

interface ListDetailPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default function ListDetail({ params }: ListDetailPageProps) {
  const [listItem, setListItem] = useState<ListItem>({
    postId: 0,
    title: '',
    content: '',
    date: '',
    //image data 필요.
  });

  useEffect(() => {
    //TODO api 분리 후 id에 따라 다이나믹 통신하기!
    // 백엔드랑 통신시 api 주소 및 양식 변경 예정
    fetch(`/mock/listDetail.json`)
      .then((res) => res.json())
      .then((result: { data: ListItem }) => setListItem(result.data));
  }, []);

  return (
    <>
      <PageTitle>{params.slug.toUpperCase()}</PageTitle>
      <S.InquiryDetailContainer>
        <S.HeaderContainer>
          <S.InquiryHeader>
            <S.InquiryTitle>{listItem.title}</S.InquiryTitle>
            <S.InquiryInfo>
              <S.Date>{listItem.date}</S.Date>
            </S.InquiryInfo>
          </S.InquiryHeader>
        </S.HeaderContainer>

        <S.ImageContainer></S.ImageContainer>

        <S.InquiryBody>{listItem.content}</S.InquiryBody>
      </S.InquiryDetailContainer>
    </>
  );
}
