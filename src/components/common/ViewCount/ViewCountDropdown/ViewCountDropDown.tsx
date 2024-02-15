import React from 'react';
import { ViewCountCategory } from '@/types/components/viewCount';
import * as S from './viewCountDropDown.style';

interface ViewCountDropdownProps {
  categories: ViewCountCategory[];
  onSelectCategory: (event: React.MouseEvent<HTMLDivElement>) => void;
  isDropdownOpen: boolean;
}

const ViewCountDropdown: React.FC<ViewCountDropdownProps> = ({
  categories,
  onSelectCategory,
  isDropdownOpen,
}) => {
  return (
    <S.ViewCountDropContainer isDropdownOpen={isDropdownOpen}>
      {categories.map((category) => (
        <S.ViewCountDropItem
          key={category.id}
          title={category.title}
          onClick={onSelectCategory}>
          {category.label}
        </S.ViewCountDropItem>
      ))}
    </S.ViewCountDropContainer>
  );
};

export default ViewCountDropdown;
