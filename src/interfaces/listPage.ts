export interface ListProps {
  params: {
    slug: string;
    id: string;
  };
}

export interface FormInputData {
  title: string;
  content: string;
  uploadFile?: UploadFileData[];
}

export interface UploadFileData {
  fileUrl: string;
  _id: string;
}
