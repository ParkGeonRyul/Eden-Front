interface Tabs {
  name?: string;
  isSubcategory?: boolean;
}

export interface Category {
  mainCategory?: string;
  tabs: Tabs[];
}
