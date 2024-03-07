'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AddressModal from '@/components/Modal/AddressModal/AddressModal';
import EmailAuthModal from '@/components/Modal/EmailAuthModal/EmailAuthModal';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import useModal from '@/hooks/useModal/usemodal';
import { UserInfo } from '@/types/apis/userInfo';
import BasicInfoSection from '../_components/Info/BasicInfoSection/BasicInfoSection';
import ProfileSection from '../_components/Info/ProfileInfoSection/ProfileInfoSection';
import { addActiveToBasicInfoData } from '../_components/Info/basicInfoConstants';
import * as S from './edit.style';

export default function Page() {
  const router = useRouter();
  const { open, close, Modal } = useModal();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userFirstName: '',
    userLastName: '',
    userId: '',
    userEmail: '',
    address: '',
    phoneNumber: '',
    birthDate: '',
    userImage: '',
  });

  const [selectedModal, setSelectedModal] = useState<
    'email' | 'address' | null
  >(null);

  const openModal = (modalType: 'email' | 'address') => {
    setSelectedModal(modalType);
    open();
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleInfoFieldClick = (field: string) => {
    if (field === 'userEmail') {
      openModal('email');
    } else if (field === 'address') {
      openModal('address');
    }
  };

  const closeModal = () => {
    setSelectedModal(null);
    close();
  };

  useEffect(() => {
    //TODO react-query로 변경 및 api 분리
    const fetchUserInfo = async () => {
      const userData = await fetch('/mock/mypageInfo.json');
      const userInfoData = await userData.json();
      setUserInfo(userInfoData);
    };

    fetchUserInfo();
  }, []);

  const editBasicInfoData = addActiveToBasicInfoData(userInfo);

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    // TODO 유효성 검사 로직 필요

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));
  };

  const handleProfileAreaClick = () => {
    // TODO 사진 업로드 기능 추가
    console.log('프로필 영역 클릭됨 - 사진 업로드 처리');
  };

  const handleUpdateButtonClick = async () => {
    try {
      // TODO 서버에 userData를 보내는 API 호출 또는 다른 업데이트 로직 추가
      console.log('수정된 정보가 서버로 전송되었습니다.');
    } catch (error) {
      console.error('정보 전송에 실패했습니다.', error);
    }
  };

  const handleModalConfirm = (modalType: 'email' | 'address') => {
    console.log(`${modalType} 인증이 확인되었습니다.`);
    //TODO 각 모달에서 얻은 데이터 setter 함수로 업데이트
    closeModal();
  };

  const renderModal = (selectedModal: string | null) => {
    switch (selectedModal) {
      case 'email':
        return (
          <EmailAuthModal
            onClickClose={closeModal}
            onClickConfirm={() => handleModalConfirm('email')}
          />
        );
      case 'address':
        return (
          <AddressModal
            onClickClose={closeModal}
            onClickConfirm={() => handleModalConfirm('address')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <S.InfoContainer>
        <S.InfoBox>
          <S.InfoHead>기본 정보</S.InfoHead>
          <S.InfoSectionWrapper>
            <ProfileSection
              label="프로필 사진"
              userImage={userInfo.userImage}
              onProfileAreaClick={handleProfileAreaClick}></ProfileSection>

            {editBasicInfoData.map((info) => (
              <BasicInfoSection
                key={info.label}
                label={info.label}
                value={info.value}
                onChange={(value) =>
                  info.active && handleInputChange(info.field, value)
                }
                onClick={() => handleInfoFieldClick(info.field)}
                active={info.active}
              />
            ))}
          </S.InfoSectionWrapper>
        </S.InfoBox>
        <S.ButtonBox>
          <CommonButton
            type="primary"
            isActive
            onClick={handleUpdateButtonClick}>
            수정완료
          </CommonButton>
          <CommonButton type="secondary" isActive onClick={handleGoBack}>
            취소하기
          </CommonButton>
        </S.ButtonBox>
      </S.InfoContainer>

      <Modal>{renderModal(selectedModal)}</Modal>
    </>
  );
}
