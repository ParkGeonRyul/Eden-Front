'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './home.style';
import { MainTitle } from '@/types/apis/mainTitle';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<{
    title: string | null;
    id: number | null;
  }>({ title: null, id: 1 });
  //랜더링 확인하려고 id를 1로 설정함

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/mock/mainTitle.json');
        const data: MainTitle[] = response.data.data;
        const titleObj = data.find((item) => item.id === selectedLanguage.id);
        if (titleObj) {
          setSelectedLanguage({ id: titleObj.id, title: titleObj.title });
        } else {
          setSelectedLanguage((prevState) => ({ ...prevState, title: null }));
        }
      } catch (error) {
        console.error('목 데이터를 불러오는데 실패했습니다', error);
        setSelectedLanguage((prevState) => ({ ...prevState, title: null }));
      }
    };

    fetchData();
  }, [selectedLanguage.id]);

  return (
    <S.MainContainer>
      {selectedLanguage.title && (
        <S.MainTitle>
          <Typewriter
            words={[selectedLanguage.title]}
            loop={1} //1번만 실행되고 다시 반복되지 않게 하려면 1써야함
            // cursor
            // cursorStyle="|"
            //위 두줄은 팀원들과 상의 후 주석처리된거 지우겠음 커서와 커서모양임
            typeSpeed={70} //타이핑되는 속도
          />
        </S.MainTitle>
      )}
    </S.MainContainer>
  );
}
