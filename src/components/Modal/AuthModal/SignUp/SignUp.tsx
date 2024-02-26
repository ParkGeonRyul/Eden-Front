'use client';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import * as S from './signUp.style';
import * as I from '@/components/icons';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import AuthButton from '@/components/common/Button/AuthButton/AuthButton';

interface SignUpProps {
  close: () => void;
}

const SignUp = ({ close }: SignUpProps) => {
  return (
    <>
      <S.BackGround>
        <S.CloseBtn onClick={close}>
          <I.ModalCloseButton />
        </S.CloseBtn>
        <S.Header>회원 가입</S.Header>
        {/* ui작업 */}
        <S.Container>
          <S.InfoBox>
            <S.SpanDot />
            <S.InfoHead>표기된 항목은 필수 입력 사항입니다.</S.InfoHead>
          </S.InfoBox>
          <S.InputContainer>
            <S.InputCategory>
              <S.CategoryName>아이디</S.CategoryName>
              <S.InputContent placeholder="영문으로 시작하는 6~12자리의 영문, 숫자만 입력해주세요." />
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryName>비밀번호</S.CategoryName>
              <S.InputContent placeholder="8자 이상의 영문(대소문자 구문)/숫자/특수문자 조합" />
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryName>비밀번호 확인</S.CategoryName>
              <S.InputContent placeholder="비밀번호를 다시 입력해주세요" />
            </S.InputCategory>
            <S.NameCategory>
              <S.InputCategory>
                <S.CategoryName>이름</S.CategoryName>
                <S.InputContent placeholder="" />
              </S.InputCategory>
              <S.InputCategory>
                <S.CategoryName>성</S.CategoryName>
                <S.InputContent placeholder="" />
              </S.InputCategory>
            </S.NameCategory>
            <S.InputCategory>
              <S.CategoryName>이메일</S.CategoryName>
              <S.CertifiedContainer>
                <S.InputContent placeholder="" />
                <AuthButton>인증요청</AuthButton>
              </S.CertifiedContainer>
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryName>인증번호</S.CategoryName>
              <S.CertifiedContainer>
                <S.TimerContainer>
                  <S.InputContent placeholder="인증번호 4자리를 입력해주세요." />
                  <S.Timer>09:50</S.Timer>
                </S.TimerContainer>
                <AuthButton>본인인증</AuthButton>
              </S.CertifiedContainer>
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryName>휴대폰</S.CategoryName>
              <S.InputContent placeholder="-없이 입력해주세요." />
            </S.InputCategory>
            <S.AgreeMentContainer>
              <S.AgreeMentInfo>
                <S.AgreeMentText>회원가입 약관 동의</S.AgreeMentText>
                <S.SpanColor>(필수)</S.SpanColor>
                <S.AgreeMentBtn>약관보기</S.AgreeMentBtn>
              </S.AgreeMentInfo>
              <CheckBox />
            </S.AgreeMentContainer>
          </S.InputContainer>
          <S.SignUpBtnBox>
            <CommonButton type="primary" wide>
              회원가입
            </CommonButton>
          </S.SignUpBtnBox>
        </S.Container>
      </S.BackGround>
    </>
  );
};

export default SignUp;
