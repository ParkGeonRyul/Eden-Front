import { useState, useEffect } from 'react';
import LinkButton from '@/components/common/Button/LinkButton';
import * as I from '@/components/icons';
import { Category } from '@/types/components/header';
import { ComponentsType } from '@/types';
import * as S from './header.style';

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const toggleHeader = () => setIsHeaderOpen((prev) => !prev);

  const renderIcon = () =>
    isHeaderOpen ? (
      <I.Close onClick={toggleHeader} />
    ) : (
      <I.Hamburger onClick={toggleHeader} />
    );

  const renderLinkButtons = () => {
    const links = [
      { label: 'LOGIN', to: '/login' },
      { label: 'RESERVATION', to: '/reservation' },
      { label: 'CONTACT', to: '/inquiry' },
    ];
    return links.map((link, index) => (
      <LinkButton label={link.label} to={link.to} key={index} />
    ));
  };

  const categoryLinkButtons = () => {
    const links = [
      { label: 'History', to: '/history', icon: <I.History /> },
      { label: 'Notice', to: '/list/notice', icon: <I.Notice /> },
      { label: 'Family', to: '/list/family', icon: <I.Family /> },
      { label: 'Children', to: '/list/children', icon: <I.Child /> },
      { label: 'Academics', to: '/list/academics', icon: <I.Academics /> },
      { label: 'Sports', to: '/list/sports', icon: <I.Sports /> },
      { label: 'Pets', to: '/list/pets', icon: <I.Pet /> },
      { label: 'E-books', to: '/list/e-books', icon: <I.Ebooks /> },
    ];
    return (
      <S.CategoryLinkContainer>
        <S.CategoryLinkBox>
          {links.map((link) => {
            return (
              <S.Category key={link.label} href={link.to}>
                {link.icon}
                {link.label}
              </S.Category>
            );
          })}
        </S.CategoryLinkBox>
      </S.CategoryLinkContainer>
    );
  };

  useEffect(() => {
    fetch('/mock/headerCategory.json')
      .then((res) => res.json())
      .then((result: { data: ComponentsType.headerType.Category[] }) =>
        setCategories(result.data),
      );
  }, []);

  return (
    <>
      <S.HeaderContainer>
        <S.Header isHeaderOpen={isHeaderOpen}>
          {renderIcon()}
          <S.ButtonBox>{renderLinkButtons()}</S.ButtonBox>
        </S.Header>
        <S.CategoryBox height={isHeaderOpen ? '100vh' : 0}>
          {categoryLinkButtons()}
        </S.CategoryBox>
      </S.HeaderContainer>
    </>
  );
};
export default Header;
