'use client';
import * as S from './listContent.style';
import Label from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';

const ListContent = () => {
  return (
    <S.ListTable>
      <S.TableHeader>
        <S.TableTitle>전체보기</S.TableTitle>
        <S.TableCount>n개의 문의</S.TableCount>
      </S.TableHeader>

      <S.TableList>
        <S.ListCategory>
          <S.ListTitle>글제목</S.ListTitle>
          <S.ListInfo>
            <S.ListState>답변여부</S.ListState>
            <S.ListDate>작성일</S.ListDate>
          </S.ListInfo>
        </S.ListCategory>

        <S.WriteList>
          <S.WriteTitle>문의제목</S.WriteTitle>
          <S.ListInfo>
            <S.ListState>
              <Label type="done">답변완료</Label>
            </S.ListState>
            <S.ListDate>
              <S.Date>23.12.19</S.Date>
            </S.ListDate>
          </S.ListInfo>
        </S.WriteList>
      </S.TableList>
    </S.ListTable>
  );
};

export default ListContent;
