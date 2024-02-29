export interface adminListItem {
  postId: number;
  title: string;
  userId: string;
  date: string;
  answerStatus: boolean;
}

export interface adminListData {
  totalCount: number;
  totalPages: number;
  list: adminListItem[];
}
