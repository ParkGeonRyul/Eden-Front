import React, { useState } from 'react';
import * as S from './searchModal.style';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import { useRouter } from 'next/navigation';

interface SearchModalProps {
  close: () => void;
}

const SearchModal = ({ close }: SearchModalProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userLastName: '',
    userFirstName: '',
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
    if (
      formData.userLastName &&
      formData.userFirstName &&
      formData.email &&
      formData.inquiryNumber
    ) {
      router.push('/inquiry/post');
    } else {
      alert('모든 필드를 채워주세요.');
    }
  };

  return (
    <S.SearchModal>
      <S.CloseButton onClick={close}>X</S.CloseButton>

      <S.ModalBody>
        <S.ModalTitle>조회하기</S.ModalTitle>

        <S.FullName>
          <S.NameContainer>
            <S.InputTitle>성</S.InputTitle>
            <S.ModalInput
              name="userLastName"
              placeholder="성"
              onChange={(e) =>
                handleInputChange('userLastName', e.target.value)
              }
            />
          </S.NameContainer>
          <S.NameContainer>
            <S.InputTitle>이름</S.InputTitle>
            <S.ModalInput
              name="userFirstName"
              placeholder="이름"
              onChange={(e) =>
                handleInputChange('userFirstName', e.target.value)
              }
            />
          </S.NameContainer>
        </S.FullName>

        <S.InputTitle>이메일</S.InputTitle>
        <S.ModalInput
          name="email"
          placeholder="이메일"
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <S.InputTitle>문의번호</S.InputTitle>
        <S.ModalInput
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
      </S.ModalBody>
    </S.SearchModal>
  );
};

export default SearchModal;
