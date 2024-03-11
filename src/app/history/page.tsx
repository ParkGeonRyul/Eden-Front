'use client';

import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import * as S from './history.style';

interface infoItems {
  infoItems: string;
}

interface addtionalInfo {
  boldStyle: string;
  addInfo: string;
}

const History = () => {
  const infoItems: infoItems[] = [
    { infoItems: 'Professor, Department of Psychology, Sogang University' },
    { infoItems: 'University of Minnesota, Twin Cities, Ph.D.' },
    { infoItems: 'Yonsei University, M.A.' },
    { infoItems: 'Yonsei University, B.S.' },
    { infoItems: '(Pronouns Used: He/him/his)' },
  ];

  const addtionalItems: addtionalInfo[] = [
    {
      boldStyle: 'Specialties:',
      addInfo:
        ' Depression, Anxiety, Relationship Issues, Identity Issues, Career Issues, and Cross-cultural',
    },
    {
      boldStyle: 'Theories Used:',
      addInfo:
        ' Feedback-Informed Treatment, Person-Centered Theory, Cognitive-Behavioral',
    },
  ];

  return (
    <Mainpage>
      <PageTitle>History</PageTitle>
      <S.SubTitle>연혁</S.SubTitle>
      <S.ContainerLine>
        <S.Container>
          <S.ImgContainer>
            <S.StyleImage
              src="/historySample.jpeg"
              alt="이미지 로드에 실패했습니다."
              width={260}
              height={350}
            />
          </S.ImgContainer>
          <S.InfoContainer>
            <S.Head>Consulting Advisors</S.Head>
            <S.Name>Kyujin Yon, Ph.D.</S.Name>
            <S.InfoStyled>
              {infoItems.map((info) => (
                <S.Info>{info.infoItems}</S.Info>
              ))}
            </S.InfoStyled>
            {addtionalItems.map((addtional) => (
              <S.Additional>
                <S.Bold>{addtional.boldStyle}</S.Bold>
                <S.Info>{addtional.addInfo}</S.Info>
              </S.Additional>
            ))}
          </S.InfoContainer>
        </S.Container>
      </S.ContainerLine>
    </Mainpage>
  );
};
export default History;
