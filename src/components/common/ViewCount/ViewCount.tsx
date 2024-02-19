'use client';
import { ReactElement, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ArrowUpIcon from '@/components/icons/ArrowUpIcon';
import ViewCountDropdown from './ViewCountDropdown/ViewCountDropDown';
import formatViewData from '@/utils/viewCount/formatViewData';
import useClickOutside from '@/utils/viewCount/outsideClick';
import { ViewCountData, FormattedViewCountData } from '@/types/apis/viewCount';
import { ViewCountCategory } from '@/types/components/viewCount';
import * as S from './viewCount.style';

const ViewCountButton = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');
  const [viewCountData, setViewCountData] = useState<ViewCountData>({
    totalViews: 0,
    familyViews: 0,
    childrenViews: 0,
    academicsViews: 0,
    sportsViews: 0,
    petsViews: 0,
  });

  const fetchViewCountData = async () => {
    try {
      //TODO 실제 통신에서 new date()로 today 값을 body에 넣기
      const response = await axios.get('/mock/viewCount.json');
      const data: ViewCountData = response.data.views;
      setViewCountData(data);
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다', error);
      alert('오류가 발생했습니다. 다시 시도해주세요');
    }
  };

  useEffect(() => {
    fetchViewCountData();
  }, []);

  useClickOutside(() => {
    setIsDropdownOpen(false);
  }, wrapperRef);

  const toggleViewCountDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewCategoryClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const title = event.currentTarget.title;
    setSelectedCategoryTitle(title);
    setIsDropdownOpen(false);
  };

  const formattedViewData: FormattedViewCountData =
    formatViewData(viewCountData);

  const getViewCountLabel = () => {
    return selectedCategoryTitle === ''
      ? '조회수 보기'
      : `조회수: ${formattedViewData[selectedCategoryTitle]}`;
  };

  const viewCountCategory: ViewCountCategory[] = [
    { id: 0, title: 'totalViews', label: '전체 조회수' },
    { id: 1, title: 'familyViews', label: 'FAMILY' },
    { id: 2, title: 'childrenViews', label: 'CHILDREN' },
    { id: 3, title: 'academicsViews', label: 'ACADEMICS' },
    { id: 4, title: 'sportsViews', label: 'SPORTS' },
    { id: 5, title: 'petsViews', label: 'PETS' },
  ];

  return (
    <S.ViewCountWrapper ref={wrapperRef}>
      <ViewCountDropdown
        categories={viewCountCategory}
        onSelectCategory={handleViewCategoryClick}
        isDropdownOpen={isDropdownOpen}
      />
      <S.ViewCount
        onClick={toggleViewCountDropdown}
        isDropdownOpen={isDropdownOpen}>
        <S.ViewCountLabel>{getViewCountLabel()}</S.ViewCountLabel>
        <ArrowUpIcon fill={isDropdownOpen ? 'white' : 'black'} />
      </S.ViewCount>
    </S.ViewCountWrapper>
  );
};

export default ViewCountButton;
