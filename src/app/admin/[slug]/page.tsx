'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import CategoryList from '@/components/CategoryList/CategoryList';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import AnswerStatusLabel from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';
import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import PaginationButtons from '@/components/common/Pagination/Pagination';
import { adminListData, adminListItem } from '@/types/apis/adminListItem';
import axios from 'axios';
import * as S from './list.style';

interface AdminListPageProps {
  params: {
    slug: string;
  };
}

const AdminList = ({ params }: AdminListPageProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [adminListItems, setAdminListItems] = useState<adminListItem[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const ListCategory = params.slug;

  const pageQueryParam = searchParams.get('page');
  const currentPage = pageQueryParam ? parseInt(pageQueryParam, 10) : 1;

  const handlePageChange = (newPage: number) => {
    router.push(`/admin/${ListCategory}?page=${newPage}`, { scroll: false });
  };

  const handleListButtonClick = () => {
    router.push('/admin');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<adminListData>(
          `/mock/admin${params.slug}ListItem.json`,
        );
        console.log(response.data);
        setAdminListItems(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
      }
    };

    fetchData();
  }, []);

  const renderAdminListItems = () => {
    return adminListItems.map((item) => (
      <S.ListItem key={item.postId}>
        <S.ListItemId>{item.postId}</S.ListItemId>
        <Link href={`/admin/${params.slug}/${item.postId}`}>
          <S.ListItemTitle>{item.title}</S.ListItemTitle>
        </Link>

        <S.ListItemUserId>{item.userId}</S.ListItemUserId>
        <S.ListItemState>
          <AnswerStatusLabel
            type={item.answerStatus === true ? 'done' : 'hold'}>
            {item.answerStatus === true ? '답변완료' : '답변대기'}
          </AnswerStatusLabel>
        </S.ListItemState>
        <S.ListItemDate>{item.date}</S.ListItemDate>
      </S.ListItem>
    ));
  };

  return (
    <Mainpage>
      <PageTitle>{params.slug.toUpperCase()}</PageTitle>
      <CategoryList />
      {renderAdminListItems()}
      <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <S.ButtonContainer>
        <CommonButton type="secondary" onClick={handleListButtonClick}>
          리스트
        </CommonButton>
      </S.ButtonContainer>
    </Mainpage>
  );
};

export default AdminList;
