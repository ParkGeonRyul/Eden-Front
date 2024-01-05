'use client';
import * as S from './searchBar.style';
import * as I from '@/components/icons/index';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const SearchBar = () => {
  const [searchState, setSearchState] = useState<string>('');
  const [searchResult, setSearchResult] = useState<boolean>(true);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!searchResult) {
      alert('검색 결과가 없습니다.');
    }
  }, [searchResult]);

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (searchState.trim() === '') {
      alert('한 글자 이상 입력해 주세요.');
    } else if (/\s/.test(searchState)) {
      alert('공백 없이 입력해 주세요.');
    } else {
      const queryParams = new URLSearchParams();
      queryParams.set('search-result', searchState);
      const queryString = queryParams.toString();

      setSearchResult(searchState.length > 0);
      // 위에 조건 두개 다 통과했을 때 backendAPI를 부른다.
      // backend 검색결과가 없을떄 alert 있으면 이동

      router.push(`${pathName}?${queryString}`);
    }
  };

  return (
    <>
      <S.Container>
        <S.InputBox
          placeholder="검색어"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        />
        <S.BtnBox>
          <button onClick={handleSearch}>
            <I.SearchIcon />
          </button>
        </S.BtnBox>
      </S.Container>
    </>
  );
};

export default SearchBar;
