'use client';
import { useEffect, useState } from 'react';
import PageTitle from '@/components/PageTitle/PageTitle';
import Mainpage from '@/components/MainPage/MainPage';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import PageButton from '@/components/ListPage/PageButton/PageButton';
import { ListItem } from '@/types/apis/listItem';
import * as S from './list.style';

type Props = {
  params: {
    slug: string;
  };
};

export default function ListPage({ params }: Props) {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  useEffect(() => {
    //TODO api 분리 후 slug에 따라 다이나믹 통신하기!
    // 백엔드랑 통신시 api 주소 및 양식 변경 예정
    fetch(`/mock/${params.slug}ListItem.json`)
      .then((res) => res.json())
      .then((result: { data: ListItem[] }) => setListItems(result.data));
  }, []);

  const renderingListItems = () => {
    return listItems.map((item, index) => (
      <S.ListItem key={index}>
        <S.ListItemId>{item.postId}</S.ListItemId>
        <S.ListItemTitle>{item.title}</S.ListItemTitle>
        <S.ListItemDate>{item.date}</S.ListItemDate>
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
      <PageButton></PageButton>
    </>
  );
}
