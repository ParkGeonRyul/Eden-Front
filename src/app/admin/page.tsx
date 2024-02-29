'use client';
import { useRouter } from 'next/navigation';
import * as S from './admin.style';
import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import Label from '@/components/common/Label/AnswerStatusLabel/AnswerStatusLabel';
import Link from 'next/link';

interface categoryList {
  category: string;
  lists: tableList[];
}

interface tableList {
  number: number;
  title: string;
  labelType: 'hold' | 'done';
  labelState: '답변대기' | '답변완료';
}

export default function Admin() {
  const router = useRouter();

  const handleMoreButtonClick = (category: string) => {
    router.push(`/admin/${category.toLowerCase()}`);
  };

  const adminListData: categoryList[] = [
    // 데이터 직접입력이아닌 통신 후 path-parameter로 연결되도록 수정
    {
      category: 'Pet',
      lists: [
        {
          number: 123712389712893712835,
          title: '모래야모래야모래야모래야모래야모래야모래야모래야모래야모래야',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 4,
          title: '츄르먹자',
          labelType: 'done',
          labelState: '답변완료',
        },
        {
          number: 3,
          title: '간식먹자',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 2,
          title: '냥냥펀치',
          labelType: 'done',
          labelState: '답변완료',
        },
        {
          number: 1,
          title: '가서좀자',
          labelType: 'hold',
          labelState: '답변대기',
        },
      ],
    },
    {
      category: 'Child',
      lists: [
        {
          number: 21,
          title: '이승윤씨',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 20,
          title: '우리코드',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 19,
          title: '코드리뷰좀',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 18,
          title: '잘좀해줘',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 17,
          title: '머리아파',
          labelType: 'hold',
          labelState: '답변대기',
        },
      ],
    },
    {
      category: 'Sport',

      lists: [
        {
          number: 101,
          title: '나는오늘',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 100,
          title: '정말로집에',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 99,
          title: '가고싶다',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 98,
          title: '오늘날씨가',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 97,
          title: '너무추워요',
          labelType: 'hold',
          labelState: '답변대기',
        },
      ],
    },
    {
      category: 'Family',
      lists: [
        {
          number: 1111,
          title: '머리가 너무아프다',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 1110,
          title: '너무 복잡하다',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 1109,
          title: '이제 머리가 안돌아간다',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 1108,
          title: '배가부르니',
          labelType: 'hold',
          labelState: '답변대기',
        },
        {
          number: 1107,
          title: '잠도오고 아무것도 하기싫다',
          labelType: 'hold',
          labelState: '답변대기',
        },
      ],
    },
  ];

  return (
    <>
      <Mainpage>
        <PageTitle>ADMIN</PageTitle>
        <S.Category>
          {adminListData.map((categoryItem) => (
            <S.Table>
              <S.TableHeader>
                <S.HeaderName>{categoryItem.category}</S.HeaderName>
                <S.MoreButton
                  onClick={() => handleMoreButtonClick(categoryItem.category)}>
                  더보기
                </S.MoreButton>
              </S.TableHeader>

              <S.TableBody>
                <S.BodyStyle>
                  <S.InfoContainer>
                    <S.NumberBox>NO</S.NumberBox>
                    <S.TitleBox>제목</S.TitleBox>
                  </S.InfoContainer>
                  <S.StateContainer>
                    <S.AnswerState>답변여부</S.AnswerState>
                  </S.StateContainer>
                </S.BodyStyle>

                {categoryItem.lists.map((listItem) => (
                  <S.BodyStyle>
                    <Link
                      href={`/admin/${categoryItem.category.toLowerCase()}/${
                        listItem.number
                      }`}
                      key={listItem.number}>
                      <S.InfoContainer>
                        <S.NumberBox>{listItem.number}</S.NumberBox>
                        <S.TitleBox>{listItem.title}</S.TitleBox>
                      </S.InfoContainer>
                    </Link>
                    <S.StateContainer>
                      <S.LabelBox>
                        <Label type={listItem.labelType}>
                          {listItem.labelState}
                        </Label>
                      </S.LabelBox>
                    </S.StateContainer>
                  </S.BodyStyle>
                ))}
              </S.TableBody>
            </S.Table>
          ))}
        </S.Category>
      </Mainpage>
    </>
  );
}
