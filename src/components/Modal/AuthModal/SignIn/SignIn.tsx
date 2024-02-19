'use client';
import * as S from './signIn.style';
import * as I from '@/components/icons';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import LinkButton from '@/components/common/Button/LinkButton';

interface SignInProps {
  goToAgreeMent: () => void;
  close: () => void;
}

const SignIn = ({ goToAgreeMent, close }: SignInProps) => {
  return (
    <>
      <S.BackGround>
        <S.CloseBtn onClick={close}>
          <I.ModalCloseButton />
        </S.CloseBtn>
        <S.Header>로그인</S.Header>
        <S.InputContainer>
          <S.InputBox>
            <S.InputText>아이디</S.InputText>
            <S.Input></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>비밀번호</S.InputText>
            <S.Input></S.Input>
          </S.InputBox>
        </S.InputContainer>
        <S.BtnBox>
          <CommonButton type="primary" wide>
            로그인
          </CommonButton>
        </S.BtnBox>
        <S.AdditionalContainer>
          <button onClick={goToAgreeMent}>회원가입</button>|
          <LinkButton label="아이디 찾기" to="" />|
          <LinkButton label="비밀번호 찾기" to="" />
          {/* 추후 모달로 변경예정 */}
        </S.AdditionalContainer>
      </S.BackGround>
    </>
  );
};

export default SignIn;
