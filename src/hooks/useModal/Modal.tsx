import React, { MouseEvent, ReactNode } from 'react';
import { ModalContainer, ModalWrap } from './modal.style';

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
