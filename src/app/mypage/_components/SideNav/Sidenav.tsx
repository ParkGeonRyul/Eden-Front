'use client';

import { usePathname } from 'next/navigation';
import MyInfoIcon from '@/components/icons/MyInfoIcon';
import MyInquiryIcon from '@/components/icons/MyInquiryIcon';
import * as S from './sidenav.style';

const SideNav = () => {
  const pathname = usePathname();
  const renderNavCategory = () => {
    const navCategory = [
      {
        icon: <MyInfoIcon />,
        label: '내 정보',
        to: '/mypage',
      },
      {
        icon: <MyInquiryIcon />,
        label: '내 게시글',
        to: '/mypage/inquiry',
      },
    ];

    return navCategory.map((category, index) => (
      <S.TabSection key={index} href={`${category.to}`}>
        <S.TabIcon isCurrentPage={pathname === category.to}>
          {category.icon}
        </S.TabIcon>
        <S.TabMenu>{category.label}</S.TabMenu>
      </S.TabSection>
    ));
  };

  return <S.SideBar>{renderNavCategory()}</S.SideBar>;
};

export default SideNav;
