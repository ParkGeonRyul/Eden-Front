export interface ListProps {
  params: {
    slug: string;
    id: string;
  };
}

export interface FormInputData {
  title: string;
  content: string;
  file?: File; //TODO: 이미지 관리 키 추가 요청 필요. 현재 response에 키 존재하지 않음.
}
