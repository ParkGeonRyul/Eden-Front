import React from 'react';
import AuthButton from '@/components/common/Button/AuthButton/AuthButton';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import { ModalCloseButton } from '@/components/icons';
import * as S from './emailAuthModal.style';

interface EmailAuthModalProps {
  onClickClose: () => void;
  onClickConfirm: () => void;
}

export default function EmailAuthModal({
  onClickClose,
  onClickConfirm,
}: EmailAuthModalProps) {
  return (
    <S.ModalContainer>
      <S.CloseButton onClick={onClickClose}>
        <ModalCloseButton />
      </S.CloseButton>
      <S.ModalBody>
        <S.ModalTitle>이메일 인증</S.ModalTitle>
        <S.InputTitle>이메일</S.InputTitle>
        <S.InputContainer>
          <S.ModalInput placeholder="이메일" />
          <AuthButton>인증요청</AuthButton>
        </S.InputContainer>
        <S.InputTitle>인증번호</S.InputTitle>
        <S.InputContainer>
          <S.ModalInput placeholder="인증번호" />
          <S.Count>09:51</S.Count>
        </S.InputContainer>
        <CommonButton
          wide={true}
          type="primary"
          isActive={true}
          onClick={onClickConfirm}>
          인증완료
        </CommonButton>
      </S.ModalBody>
    </S.ModalContainer>
  );
}
