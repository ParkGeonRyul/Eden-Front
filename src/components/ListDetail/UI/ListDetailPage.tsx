'use client';

import Image from 'next/image';
import * as S from '@/components/ListDetail/UI/listDetailPage.style';
import ControlButton from '@/components/common/Button/ControlButton/ControlButton';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import { ListItemDetail } from '@/types/apis/listItem';

interface ListDetailPageProps {
  listItemDetail: ListItemDetail;
  isAdmin: boolean;
  slug: string;
  deletePost: () => void;
}

export default function ListDetailPage({
  listItemDetail,
  isAdmin,
  slug,
  deletePost,
}: ListDetailPageProps) {
  return (
    <>
      <PageTitle>{slug.toUpperCase()}</PageTitle>
      <S.ListDetailContainer>
        <S.HeaderContainer>
          <S.ListHeader>
            <S.ListTitle>{listItemDetail.title}</S.ListTitle>
            <S.ListInfo>
              {isAdmin && (
                <S.ButtonBox>
                  <S.StyledLink
                    href={`/list/${slug}/${listItemDetail.postId}/edit`}>
                    <ControlButton type="edit"></ControlButton>
                  </S.StyledLink>
                  <ControlButton
                    type="delete"
                    onClick={deletePost}></ControlButton>
                </S.ButtonBox>
              )}
              <S.Date>{listItemDetail.createdAt}</S.Date>
            </S.ListInfo>
          </S.ListHeader>
        </S.HeaderContainer>
        <S.ImageContainer>
          <S.StyledImage
            src={listItemDetail.uploadFile[0].fileUrl}
            alt="이미지"
            width={380}
            height={360}></S.StyledImage>
        </S.ImageContainer>
        <S.ListBody>{listItemDetail.content}</S.ListBody>
      </S.ListDetailContainer>
      <S.ViewContainer>
        <S.View>조회수: {listItemDetail.view}</S.View>
      </S.ViewContainer>
    </>
  );
}
