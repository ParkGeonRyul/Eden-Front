'use client;';

import * as S from './categoryList.style';

const CategoryList = () => {
  return (
    <S.Section>
      <S.ListCategory>
        <S.ListCategoryNumber>no</S.ListCategoryNumber>
        <S.ListCategoryTitle>제목</S.ListCategoryTitle>
        <S.ListInfo>
          <S.ListUserId>아이디</S.ListUserId>
          <S.ListState>답변여부</S.ListState>
          <S.ListDate>작성일</S.ListDate>
        </S.ListInfo>
      </S.ListCategory>
    </S.Section>
  );
};

export default CategoryList;
