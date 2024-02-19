import React, { ReactNode, MouseEvent } from 'react';
import { ModalWrap, ModalContainer } from './modal.style';

interface ModalProps {
  onClose: () => void;
  closeOnExternalClick?: boolean;
  children: ReactNode;
}

export default function Modal({
  onClose,
  closeOnExternalClick = false,
  children,
}: ModalProps) {
  const handleWrapClick = (e: MouseEvent) => {
    closeOnExternalClick && onClose();
  };

  return (
    <ModalWrap onClick={handleWrapClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </ModalWrap>
  );
}
