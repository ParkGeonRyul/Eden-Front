'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import * as I from '@/components/icons/index';
import * as S from './pagination.style';

const BUTTONS_PER_PAGE = 5;

interface PaginationButtonsProps {
  totalPages: number;
}

function PaginationButtons({ totalPages }: PaginationButtonsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPageGroupIndex, setCurrentPageGroupIndex] = useState(0);

  const lastPageGroupIndex = Math.ceil(totalPages / BUTTONS_PER_PAGE) - 1;

  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const buttons = Array.from(
    {
      length: Math.min(
        BUTTONS_PER_PAGE,
        totalPages - currentPageGroupIndex * BUTTONS_PER_PAGE,
      ),
    },
    (_, i) => i + 1 + currentPageGroupIndex * BUTTONS_PER_PAGE,
  );

  return (
    <S.PaginationContainer>
      {currentPageGroupIndex > 0 && (
        <I.ArrowLeft
          onClick={() => setCurrentPageGroupIndex(currentPageGroupIndex - 1)}
        />
      )}
      <S.Pagination>
        {buttons.map((number) => (
          <S.StyledLink href={createPageURL(number)} key={number}>
            <S.PageButton isCurrent={number === currentPage}>
              {number}
            </S.PageButton>
          </S.StyledLink>
        ))}
      </S.Pagination>
      {currentPageGroupIndex < lastPageGroupIndex && (
        <I.ArrowRight
          onClick={() => setCurrentPageGroupIndex(currentPageGroupIndex + 1)}
        />
      )}
    </S.PaginationContainer>
  );
}

export default PaginationButtons;
