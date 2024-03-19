export interface InquiryPost {
  inquiryUniqueId: string;
  title: string;
  content: string;
  inquiryCreatedAt: string;
  answerStatus: boolean;
  answer?: string;
  answerUpdatedAt?: string;
}

export interface InquiryPostListItem {
  inquiryUniqueId: string;
  title: string;
  answerStatus: boolean;
  inquiryCreatedAt: string;
}

export interface InquiryPostList {
  totalCount: number;
  totalPage: number;
  list: InquiryPostListItem[];
}
