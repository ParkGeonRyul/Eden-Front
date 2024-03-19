'use client';

import React from 'react';
import * as I from '@/components/icons';
import * as IM from './inquiryModal.style';

interface InquiryModalProps {
  close: () => void;
}
const InquiryModal: React.FC<InquiryModalProps> = ({ close }) => {
  return (
    <IM.InquiryModal>
      <IM.CloseButton onClick={close}>X</IM.CloseButton>
      <IM.ModalTitle>문의가 완료되었습니다.</IM.ModalTitle>
      <IM.ModalContent>
        '문의가 입력하신 이메일(sample@naver.com)로 안내 메일을
        보냈습니다.\n코드번호로 작성하신 문의를 확인할 수 있습니다.'
        <IM.SvgContainer>
          <I.Mail />
        </IM.SvgContainer>
      </IM.ModalContent>
    </IM.InquiryModal>
  );
};

export default InquiryModal;
