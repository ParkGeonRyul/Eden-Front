import { useState, useEffect } from 'react';
import * as S from './header.style';
import LinkButton from '@/components/common/Button/LinkButton';
import Hamburger from '@/assets/icons/hamburger.svg';
import Close from '@/assets/icons/close.svg';
import { Category } from '@/types/components/header';

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const toggleHeader = () => setIsHeaderOpen((prev) => !prev);

  const renderIcon = () =>
    isHeaderOpen ? (
      <Close onClick={toggleHeader} />
    ) : (
      <Hamburger onClick={toggleHeader} />
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

  useEffect(() => {
    fetch('/mock/headerCategory.json')
      .then((res) => res.json())
      .then((result: { data: ComponentsType.headerType.Category[] }) =>
        setCategories(result.data),
      );
  }, []);

  return (
    <>
      <S.Header>
        {renderIcon()}
        <S.ButtonBox>{renderLinkButtons()}</S.ButtonBox>
      </S.Header>
      <S.CategoryBox height={isHeaderOpen ? '100vh' : 0}>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </S.CategoryBox>
    </>
  );
};
export default Header;
