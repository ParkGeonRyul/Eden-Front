import { ViewCountData, FormattedViewCountData } from '@/types/apis/viewCount';

const formatNumber = (value: number): string => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(value % 1000000 !== 0 ? 1 : 0) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(value % 1000 !== 0 ? 1 : 0) + 'K';
  } else {
    return value.toString();
  }
};

const formatViewData = (data: ViewCountData): FormattedViewCountData => {
  for (const key in data) {
    const value = data[key as keyof ViewCountData];
    if (typeof value !== 'number') {
      throw new Error(
        `Invalid view count data: "${key}" value is not a number`,
      );
    }
    if (value < 0) {
      throw new Error(`Invalid view count data: "${key}" value is negative`);
    }
  }

  const transformedData = {
    totalViews: formatNumber(data.totalViews),
    familyViews: formatNumber(data.familyViews),
    childrenViews: formatNumber(data.childrenViews),
    academicsViews: formatNumber(data.academicsViews),
    sportsViews: formatNumber(data.sportsViews),
    petsViews: formatNumber(data.petsViews),
  };
  return transformedData;
};

export default formatViewData;
