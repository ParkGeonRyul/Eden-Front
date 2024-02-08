'use client';
import PageTitle from '@/components/PageTitle/PageTitle';
import Mainpage from '@/components/MainPage/MainPage';
import CheckBox from '@/components/CheckBox/CheckBox';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import * as S from './reservation.style';

const Reservation = () => {
  return (
    <Mainpage>
      <PageTitle>RESERVATION</PageTitle>
      <S.SubTitle>원하는 상담 날짜와 시간을 선택해주세요.</S.SubTitle>
      <S.Calendar>
        <a href="https://new.smartplace.naver.com/" target="_blank">
          네이버
        </a>
      </S.Calendar>
      <S.AgreeContainer>
        <S.Agree>개인정보 수집 동의</S.Agree>
        <CheckBox position="left">
          개인정보 수집항목 및 이용동의 (필수)
        </CheckBox>
        <S.ViewContent>내용보기</S.ViewContent>
      </S.AgreeContainer>
      <S.ButtonContainer>
        <CommonButton type="primary" isActive={true}>
          예약하기
        </CommonButton>
      </S.ButtonContainer>
    </Mainpage>
  );
};

export default Reservation;
