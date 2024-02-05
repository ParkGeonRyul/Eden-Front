'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import ProfileSection from '@/components/Mypage/Info/ProfileInfoSection/ProfileInfoSection';
import BasicInfoSection from '@/components/Mypage/Info/BasicInfoSection/BasicInfoSection';
import { createBasicInfoData } from '@/components/Mypage/Info/basicInfoConstants';
import { UserInfo } from '@/types/apis/userInfo';
import * as S from './info.style';

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

  useEffect(() => {
    //TODO react-query로 변경 및 api 분리
    const fetchUserInfo = async () => {
      const userData = await fetch('/mock/mypageInfo.json');
      const userInfoData = await userData.json();
      setUserInfo(userInfoData);
    };

    fetchUserInfo();
  }, []);

  const basicInfoData = createBasicInfoData(userInfo);

  return (
    <S.InfoContainer>
      <S.InfoBox>
        <S.InfoHead>기본 정보</S.InfoHead>
        <S.InfoSectionWrapper>
          <ProfileSection
            label="프로필 사진"
            userImage={userInfo.userImage}></ProfileSection>
          {basicInfoData.map((info) => (
            <BasicInfoSection
              key={info.label}
              label={info.label}
              value={info.value}
            />
          ))}
        </S.InfoSectionWrapper>
      </S.InfoBox>
      <Link href="/mypage/edit">
        <CommonButton type="primary" isActive>
          수정하기
        </CommonButton>
      </Link>
    </S.InfoContainer>
  );
}
