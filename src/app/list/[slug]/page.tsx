'use client';
import { useEffect, useState } from 'react';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import PaginationButtons from '@/components/common/Pagination/Pagination';
import { ListItem, ListData } from '@/types/apis/listItem';
import * as S from './list.style';

interface ListPageProps {
  params: {
    slug: string;
  };
}

export default function ListPage({ params }: ListPageProps) {
  const [isAdmin, setIsAdmiin] = useState(true);
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const limitPerPage = 5;

  useEffect(() => {
    //TODO api 분리 후 slug에 따라 다이나믹 통신하기!
    // 백엔드랑 통신시 api 주소 및 양식 변경 예정
    const fetchData = async () => {
      try {
        const res = await fetch(`/mock/${params.slug}ListItem.json`);
        const result: { data: ListData } = await res.json();
        const { list, totalPages } = result.data;

        setListItems(list);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const renderingListItems = () => {
    return listItems.map((item, index) => (
      <S.ListItem key={index}>
        <S.ListItemId>{item.postId}</S.ListItemId>
        <S.ListItemTitle>
          <S.StyledLink href={`/list/${params.slug}/${item.postId}`}>
            {item.title}
          </S.StyledLink>
        </S.ListItemTitle>
        <S.ListItemDate>{item.createdAt}</S.ListItemDate>
      </S.ListItem>
    ));
  };

  return (
    <>
      <PageTitle>{params.slug.toUpperCase()}</PageTitle>
      <S.ListSubtitle>새로운 소식 및 공지 사항을 알려드립니다.</S.ListSubtitle>
      <SearchBar></SearchBar>
      <S.Section>
        <S.ListCategory>
          <S.ListCategoryItem>NO</S.ListCategoryItem>
          <S.ListCategoryItem>제목</S.ListCategoryItem>
          <S.ListCategoryItem>등록일</S.ListCategoryItem>
        </S.ListCategory>
        {renderingListItems()}
      </S.Section>
      <PaginationButtons
        limitPerPage={limitPerPage}
        totalPages={totalPages}></PaginationButtons>

      {isAdmin && (
        <S.ButtonContainer>
          <S.StyledLink href={`/list/${params.slug}/new`}>
            <CommonButton type="primary">글 작성</CommonButton>
          </S.StyledLink>
        </S.ButtonContainer>
      )}
    </>
  );
}
