'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import ProfileSection from '@/components/Mypage/Info/ProfileInfoSection/ProfileInfoSection';
import BasicInfoSection from '@/components/Mypage/Info/BasicInfoSection/BasicInfoSection';
import { addActiveToBasicInfoData } from '@/components/Mypage/Info/basicInfoConstants';
import { UserInfo } from '@/types/apis/userInfo';
import * as S from './edit.style';

export default function Page() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: '',
    userId: '',
    userEmail: '',
    address: '',
    phoneNumber: '',
    birthDate: '',
    userImage: '',
  });

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
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

  const editBasicInfoData = addActiveToBasicInfoData(userInfo);

  return (
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
              active={info.active}
            />
          ))}
        </S.InfoSectionWrapper>
      </S.InfoBox>
      <S.ButtonBox>
        <CommonButton type="primary" isActive onClick={handleUpdateButtonClick}>
          수정완료
        </CommonButton>
        <CommonButton type="secondary" isActive onClick={handleGoBack}>
          취소하기
        </CommonButton>
      </S.ButtonBox>
    </S.InfoContainer>
  );
}
