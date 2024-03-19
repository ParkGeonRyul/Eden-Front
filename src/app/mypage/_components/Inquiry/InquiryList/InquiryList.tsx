'use client';

import { useEffect, useState } from 'react';
import PaginationButtons from '@/components/common/Pagination/Pagination';
import { InquiryPostList } from '@/types/apis/userInquiry';
import InquiryListItem from './InquiryListItem/InquiryListItem';
import * as S from './inquiryList.style';

const LIMIT_PER_PAGE = 3;

interface InquiryListProps {
  setInquiryUniqueId: (state: string) => void;
}

export default function InquiryList({ setInquiryUniqueId }: InquiryListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [inquiryListItemData, setInquiryListItemData] =
    useState<InquiryPostList | null>(null);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    //TODO react-query로 변경 및 api 분리  page,limit 추가
    const fetchInquiryList = async () => {
      const fetchInquiryList = await fetch(
        // `/mypage/inquiry-list?page={currentPage}&limit={LIMIT_PER_PAGE}`
        `/mock/inquiryList${currentPage}.json`,
        {
          headers: { contentType: 'application/json' },
        },
      );
      const result = await fetchInquiryList.json();
      setInquiryListItemData(result.data);
    };

    fetchInquiryList();
  }, [currentPage]);

  if (inquiryListItemData === null) {
    return null;
  }

  return (
    <>
      <S.InquiryListContainer>
        <S.InquiryTable>
          <S.TableHeader>
            <S.TableTitle>전체보기</S.TableTitle>
            <S.TableCount>
              {inquiryListItemData.totalCount}
              개의 문의
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
            {inquiryListItemData.list.map((item) => (
              <InquiryListItem
                key={item.inquiryUniqueId}
                item={item}
                setInquiryUniqueId={setInquiryUniqueId}></InquiryListItem>
            ))}
          </S.TableList>
        </S.InquiryTable>
        <PaginationButtons
          totalPages={inquiryListItemData.totalPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </S.InquiryListContainer>
    </>
  );
}
