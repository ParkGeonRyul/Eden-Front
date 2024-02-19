import React, { ReactNode, useCallback, useState } from 'react';
import Modal from './Modal';

interface UseModalProps {
  closeOnExternalClick?: boolean;
}

interface UseModalReturn {
  Modal: React.FC<{ children: ReactNode }>;
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const useModal = ({
  closeOnExternalClick = false,
}: UseModalProps = {}): UseModalReturn => {
  // closeOnExternalClick : 외부 클릭시 모달 닫힘 여부 설정
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    Modal: isOpen
      ? ({ children }) => (
          <Modal closeOnExternalClick={closeOnExternalClick} onClose={close}>
            {children}
          </Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
