export interface ViewCountData {
  totalViews: number;
  familyViews: number;
  childrenViews: number;
  academicsViews: number;
  sportsViews: number;
  petsViews: number;
}

export interface FormattedViewCountData {
  [key: string]: string;
}
