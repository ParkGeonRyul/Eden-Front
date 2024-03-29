'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormPage from '@/app/list/[slug]/_components/Formpage/UI/FormPage';
import getCategoryTypeFromSlug from '@/app/list/[slug]/_components/Formpage/utils/getCategoryTypeFromSlug';
import {
  isContentLengthValid,
  validateInputData,
} from '@/app/list/[slug]/_components/Formpage/utils/postValid';
import updateFormData from '@/app/list/[slug]/_components/Formpage/utils/updatdFormData';
import { ListProps } from '@/interfaces/listPage';
import { ListItemDetail, UploadFileData } from '@/types/apis/listItem';
import { FormType } from '@/types/components/formTypes';

interface FormPageContainerProps extends ListProps {
  type: FormType;
  initialFormData?: ListItemDetail;
}

interface DefaultFormData {
  title: string;
  content: string;
  uploadFile: UploadFileData[];
}

export default function FormPageContainer({
  params,
  initialFormData,
  type,
}: FormPageContainerProps) {
  const router = useRouter();
  const defaultFormData: DefaultFormData = {
    title: '',
    content: '',
    uploadFile: [],
  };
  const [formData, setFormData] = useState({
    ...defaultFormData,
    ...(initialFormData && {
      title: initialFormData.title,
      content: initialFormData.content,
      uploadFile: initialFormData.uploadFile,
    }),
  });
  const [selectedType, setSelectedType] = useState(
    getCategoryTypeFromSlug(params.slug),
  );

  const handleGoBack = () => {
    router.back();
  };

  const handlePostsInputChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'type':
        setSelectedType(value);
        break;
      case 'title':
        updateFormData('title', value, setFormData);
        break;
      case 'content':
        if (isContentLengthValid(value)) {
          updateFormData('content', value, setFormData);
        } else {
          alert('글자 수는 2000자를 초과할 수 없습니다.');
        }
        break;
      default:
        break;
    }
  };

  const handleDoneButtonClick = () => {
    if (validateInputData({ ...formData, selectedType })) {
      if (type === 'post') {
        // TODO: 새로운 포스트를 생성하는 API 호출
      } else if (type === 'edit') {
        // TODO: 기존의 포스트를 수정하는 API 호출
      }
    } else {
      alert('카테고리 유형과 제목, 내용을 모두 입력해주세요.');
    }
  };

  const handleFileUpload = (file: File) => {
    //TODO formData에 file 데이터 추가 로직
  };

  const buttonLabelsMap = {
    post: { done: '작성완료', goBack: '취소하기' },
    edit: { done: '수정완료', goBack: '취소하기' },
  };

  const getButtonLabels = () => {
    const labels = buttonLabelsMap[type];

    if (!labels) {
      throw new Error('잘못된 입력이 들어왔습니다.');
    }

    return labels;
  };

  return (
    <FormPage
      type="post"
      formData={formData}
      selectedType={selectedType}
      onFormInputChange={handlePostsInputChange}
      onFilesUpload={handleFileUpload}
      onDoneButtonClick={handleDoneButtonClick}
      onGoBack={handleGoBack}
      buttonLabels={getButtonLabels()}></FormPage>
  );
}
