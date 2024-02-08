'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import ControlButton from '@/components/common/Button/ControlButton/ControlButton';
import { ListItemDetail } from '@/types/apis/listItem';
import * as S from './listDetail.style';

interface ListDetailPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default function ListDetail({ params }: ListDetailPageProps) {
  const router = useRouter();
  const [isAdmin, setIsAdmiin] = useState(true);
  const [listItem, setListItem] = useState<ListItemDetail>({
    title: '',
    content: '',
    date: '',
    //image data 필요.
  });
  const postId = params.id;

  const deletePost = () => {
    //TODO 게시글 삭제 로직 추가
    console.log(`${params.slug}의 ${postId} 게시글 삭제`);
  };

  const goEditPage = () => {
    router.push(`/list/${params.slug}/${postId}/edit`);
  };

  useEffect(() => {
    //TODO api 분리 후 id에 따라 다이나믹 통신하기!
    // 백엔드랑 통신시 api 주소 및 양식 변경 예정
    fetch(`/mock/listDetail.json`)
      .then((res) => res.json())
      .then((result: { data: ListItemDetail }) => setListItem(result.data));
  }, []);

  return (
    <>
      <PageTitle>{params.slug.toUpperCase()}</PageTitle>
      <S.InquiryDetailContainer>
        <S.HeaderContainer>
          <S.InquiryHeader>
            <S.InquiryTitle>{listItem.title}</S.InquiryTitle>
            <S.InquiryInfo>
              {isAdmin && (
                <S.ButtonBox>
                  <ControlButton
                    type="edit"
                    onClick={goEditPage}></ControlButton>

                  <ControlButton
                    type="delete"
                    onClick={deletePost}></ControlButton>
                </S.ButtonBox>
              )}
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
