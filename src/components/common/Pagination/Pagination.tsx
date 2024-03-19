'use client';

import { useState } from 'react';
import * as I from '@/components/icons/index';
import * as S from './pagination.style';

const BUTTONS_PER_PAGE = 5;

interface PaginationButtonsProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
}

function PaginationButtons({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationButtonsProps) {
  const [currentPageGroupIndex, setCurrentPageGroupIndex] = useState(0);

  const lastPageGroupIndex = Math.ceil(totalPages / BUTTONS_PER_PAGE) - 1;

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
          <S.PageButton
            key={number}
            isCurrent={number === currentPage}
            onClick={() => handlePageChange(number)}>
            {number}
          </S.PageButton>
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
