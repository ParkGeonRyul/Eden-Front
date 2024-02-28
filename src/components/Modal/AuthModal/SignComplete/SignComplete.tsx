'use client';

import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import * as I from '@/components/icons';
import * as S from './signComplete.style';

interface SignCompleteProps {
  close: () => void;
  goToSignIn: () => void;
}

const SignComplete = ({ close, goToSignIn }: SignCompleteProps) => {
  return (
    <>
      <S.BackGround>
        <S.CloseBtn onClick={close}>
          <I.ModalCloseButton />
        </S.CloseBtn>

        <S.Container>
          <S.InfoBox>
            <S.Header>회원가입 완료</S.Header>
            <S.Body>확인 버튼을 누르면 로그인 화면으로 이동합니다.</S.Body>
          </S.InfoBox>

          <CommonButton type="primary" onClick={goToSignIn} wide>
            확인
          </CommonButton>
        </S.Container>
      </S.BackGround>
    </>
  );
};
export default SignComplete;
