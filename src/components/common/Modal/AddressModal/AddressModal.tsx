import React from 'react';
import * as S from './addressModal.style';

interface AddressModalProps {
  onClickClose: () => void;
  onClickConfirm: () => void;
}

export default function AddressModal({
  onClickClose,
  onClickConfirm,
}: AddressModalProps) {
  return (
    <S.ModalContainer>
      <div onClick={onClickClose}>닫기</div>
      <div onClick={onClickConfirm}>확인</div>
      주소모달
    </S.ModalContainer>
  );
}
