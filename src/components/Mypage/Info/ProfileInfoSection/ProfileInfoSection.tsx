import React from 'react';
import * as S from './profileInfoSection.style';

type ProfileSectionProps = {
  label: string;
  userImage: string | null;
  onProfileAreaClick?: () => void;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({
  label,
  userImage,
  onProfileAreaClick,
}) => {
  return (
    <S.InfoSection>
      <S.InfoMenu>{label}</S.InfoMenu>
      <S.InfoContent>
        <S.ProfileInstructions>
          {userImage === null
            ? '프로필 사진을 추가하여 계정을 맞춤설정하세요'
            : ''}
        </S.ProfileInstructions>
        <S.ProfileArea onClick={onProfileAreaClick}></S.ProfileArea>
      </S.InfoContent>
    </S.InfoSection>
  );
};

export default ProfileSection;
