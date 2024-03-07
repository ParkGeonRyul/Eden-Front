'use client';

import PaginationButtons from '@/components/common/Pagination/Pagination';
import { InquiryPostList } from '@/types/apis/userInquiry';
import InquiryListItem from './InquiryListItem/InquiryListItem';
import * as S from './inquiryList.style';

interface InquiryListProps {
  inquiryListItemData: InquiryPostList;
}

export default function InquiryList({ inquiryListItemData }: InquiryListProps) {
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
                item={item}></InquiryListItem>
            ))}
          </S.TableList>
        </S.InquiryTable>
        <PaginationButtons totalPages={inquiryListItemData.totalPage} />
      </S.InquiryListContainer>
    </>
  );
}
