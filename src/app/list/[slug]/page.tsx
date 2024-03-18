'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import PaginationButtons from '@/components/common/Pagination/Pagination';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import { ListData, ListItem } from '@/types/apis/listItem';
import axios from 'axios';
import * as S from './list.style';

const LIMIT_PER_PAGE = 5;

interface ListPageProps {
  params: {
    slug: string;
  };
}

export default function ListPage({ params }: ListPageProps) {
  const [isAdmin, setIsAdmiin] = useState(true);
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const ListCategory = params.slug;

  const pageQueryParam = searchParams.get('page');

  const currentPage = pageQueryParam ? parseInt(pageQueryParam, 10) : 1;

  const handlePageChange = (newPage: number) => {
    router.push(`/list/${ListCategory}?page=${newPage}`, { scroll: false });
  };

  useEffect(() => {
    //TODO api 분리 후 slug에 따라 다이나믹 통신하기!
    const fetchData = async () => {
      try {
        const params = { limit: LIMIT_PER_PAGE, page: currentPage };
        console.log('currentpage: ', currentPage);

        const response = await axios.get(
          `/mock/${ListCategory}ListItem${currentPage}.json`,
          {
            params,
          },
        );

        const result: { data: ListData } = response.data;
        const { list, totalPage } = result.data;

        setListItems(list);
        setTotalPages(totalPage);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [ListCategory, currentPage]);

  const renderingListItems = () => {
    return listItems.map((item, index) => (
      <S.ListItem key={index}>
        <S.ListItemId>{item.postId}</S.ListItemId>
        <S.ListItemTitle>
          <S.StyledLink href={`/list/${ListCategory}/${item.postId}`}>
            {item.title}
          </S.StyledLink>
        </S.ListItemTitle>
        <S.ListItemDate>{item.createdAt}</S.ListItemDate>
      </S.ListItem>
    ));
  };

  console.log('랜더링됐다!');

  return (
    <>
      <PageTitle>{ListCategory.toUpperCase()}</PageTitle>
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
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}></PaginationButtons>

      {isAdmin && (
        <S.ButtonContainer>
          <S.StyledLink href={`/list/${ListCategory}/new`}>
            <CommonButton type="primary">글 작성</CommonButton>
          </S.StyledLink>
        </S.ButtonContainer>
      )}
    </>
  );
}
