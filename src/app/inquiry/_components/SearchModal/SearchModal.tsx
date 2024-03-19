import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import axios from 'axios';
import * as S from './searchModal.style';

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

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('엔드포인튼');
        const { lastName, firstName, email } = response.data;

        setFormData((prev) => ({
          ...prev,
          userLastName: lastName,
          userFirstName: firstName,
          email: email,
        }));
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류.', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
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
              value={formData.userLastName}
              placeholder="성"
              onChange={handleInputChange}
            />
          </S.NameContainer>
          <S.NameContainer>
            <S.InputTitle>이름</S.InputTitle>
            <S.ModalInput
              name="userFirstName"
              value={formData.userFirstName}
              placeholder="이름"
              onChange={handleInputChange}
            />
          </S.NameContainer>
        </S.FullName>

        <S.InputTitle>이메일</S.InputTitle>
        <S.ModalInput
          name="email"
          value={formData.email}
          placeholder="이메일"
          onChange={handleInputChange}
        />
        <S.InputTitle>문의번호</S.InputTitle>
        <S.ModalInput
          name="inquiryNumber"
          value={formData.inquiryNumber}
          placeholder="문의번호"
          onChange={handleInputChange}
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
