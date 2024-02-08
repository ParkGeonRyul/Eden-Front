'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import PageButton from '@/components/ListPage/PageButton/PageButton';
import { ListItem } from '@/types/apis/listItem';
import * as S from './list.style';

interface ListPageProps {
  params: {
    slug: string;
  };
}

export default function ListPage({ params }: ListPageProps) {
  const router = useRouter();
  const [isAdmin, setIsAdmiin] = useState(false);
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const postId = params.slug;

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
        <Link href={`/list/${params.slug}/${item.postId}`}>
          <S.ListItemTitle>{item.title}</S.ListItemTitle>
        </Link>
        <S.ListItemDate>{item.date}</S.ListItemDate>
      </S.ListItem>
    ));
  };

  const goNewPostPage = () => {
    router.push(`/list/${params.slug}/new`);
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

      {isAdmin && (
        <S.ButtonContainer>
          <CommonButton type="primary" onClick={goNewPostPage}>
            글 작성
          </CommonButton>
        </S.ButtonContainer>
      )}
    </>
  );
}
