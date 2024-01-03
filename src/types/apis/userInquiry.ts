export interface AdminAnswer {
  postId: number;
  createdAt: string;
  content: string;
}

export interface InquiryPost {
  postId: number;
  createdAt: string;
  content: string;
  answerStatus: boolean;
}

export interface InquiryPostData {
  postId: number;
  postTitle: string;
  createdAt: string;
  content: string;
  adminAnswer: AdminAnswer;
  postList: InquiryPost[];
}
