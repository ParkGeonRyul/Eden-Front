'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserInfo } from '@/types/apis/userInfo';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import ProfileSection from '@/components/Mypage/Info/ProfileInfoSection/ProfileInfoSection';
import BasicInfoSection from '@/components/Mypage/Info/BasicInfoSection/BasicInfoSection';
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

  const basicInfoData: {
    label: string;
    value: string;
    active: boolean;
    field: keyof UserInfo;
  }[] = [
    {
      label: '이름',
      value: userInfo.userName,
      active: false,
      field: 'userName',
    },
    {
      label: '아이디',
      value: userInfo.userId,
      active: true,
      field: 'userId',
    },
    {
      label: '이메일',
      value: userInfo.userEmail,
      active: true,
      field: 'userEmail',
    },
    {
      label: '주소',
      value: userInfo.address,
      active: true,
      field: 'address',
    },
    {
      label: '휴대폰번호',
      value: userInfo.phoneNumber,
      active: true,
      field: 'phoneNumber',
    },
    {
      label: '생년월일',
      value: userInfo.birthDate,
      active: true,
      field: 'birthDate',
    },
  ];

  return (
    <S.InfoContainer>
      <S.InfoBox>
        <S.InfoHead>기본 정보</S.InfoHead>
        <S.InfoSectionWrapper>
          <ProfileSection
            label="프로필 사진"
            userImage={userInfo.userImage}
            onProfileAreaClick={handleProfileAreaClick}></ProfileSection>

          {basicInfoData.map((info) => (
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
