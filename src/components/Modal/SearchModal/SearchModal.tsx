import React, { useState } from 'react';
import * as SM from './searchModal.style';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import { useRouter } from 'next/navigation';

interface SearchModalProps {
  close: () => void;
}

const SearchModal = ({ close }: SearchModalProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryNumber: '',
  });

  const handleInputChange = (fieldName: string, value: string) => {
    console.log(`${fieldName}: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSearch = () => {
    if (formData.name && formData.email && formData.inquiryNumber) {
      router.push('/inquiry/post');
    } else {
      alert('모든 필드를 채워주세요.');
    }
  };

  return (
    <SM.SearchModal>
      <SM.CloseButton onClick={close}>X</SM.CloseButton>

      <SM.ModalBody>
        <SM.ModalTitle>조회하기</SM.ModalTitle>
        <SM.InputTitle>이름</SM.InputTitle>
        <SM.ModalInput
          name="name"
          placeholder="이름"
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <SM.InputTitle>이메일</SM.InputTitle>
        <SM.ModalInput
          name="email"
          placeholder="이메일"
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <SM.InputTitle>문의번호</SM.InputTitle>
        <SM.ModalInput
          name="inquiryNumber"
          placeholder="문의번호"
          onChange={(e) => handleInputChange('inquiryNumber', e.target.value)}
        />

        <CommonButton
          wide={true}
          type="primary"
          isActive={true}
          onClick={handleSearch}>
          조회하기
        </CommonButton>
      </SM.ModalBody>
    </SM.SearchModal>
  );
};

export default SearchModal;
