export interface ListItem {
  postId: number;
  title: string;
  createdAt: string;
}

export interface UploadFileData {
  fileUrl: string;
}

export interface ListItemDetail extends ListItem {
  content: string;
  uploadFile: UploadFileData[];
  isSign: boolean;
  language: number;
  view: number;
  category: number;
  updateddAt: string;
}

export interface ListData {
  totalCount: number;
  totalPage: number;
  list: ListItem[];
}
