import LinkButton from '@/components/common/Button/LinkButton';
import * as I from '@/components/icons/index';
import * as S from './sidenav.style';
import React from 'react';

const SideNav = () => {
  const renderNavCategory = () => {
    const navCategory = [
      {
        icon: <I.Gokey />,
        label: '내 정보',
        to: '/mypage',
      },
      {
        icon: <I.MyInquiry />,
        label: '내 게시글',
        to: '/mypage/inquiry',
      },
    ];

    return navCategory.map((category, index) => (
      <S.TabSection key={index} href={`${category.to}`}>
        <S.TabIcon>{category.icon}</S.TabIcon>
        <S.TabMenu>{category.label}</S.TabMenu>
      </S.TabSection>
    ));
  };

  return <S.SideBar>{renderNavCategory()}</S.SideBar>;
};

export default SideNav;
