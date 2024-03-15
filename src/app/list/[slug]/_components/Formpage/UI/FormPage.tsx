import DropDown from '@/components/common/DropDown/DropDown';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import { FormInputData } from '@/interfaces/listPage';
import { FormType } from '@/types/components/formTypes';
import FilesInputButton from './FilesInput/FilesInput';
import FormButton from './FormButton/FormButton';
import * as S from './formPage.style';

interface FormPageProps {
  type: FormType;
  formData: FormInputData;
  selectedType: string;
  onFilesUpload: (file: File) => void;
  onFormInputChange: (fieldName: string, value: string) => void;
  onDoneButtonClick: () => void;
  onGoBack: () => void;
  buttonLabels: {
    done: string;
    goBack: string;
  };
}

const FormPage: React.FC<FormPageProps> = ({
  type,
  formData,
  selectedType,
  onFilesUpload,
  onFormInputChange,
  onDoneButtonClick,
  onGoBack,
  buttonLabels,
}) => {
  return (
    <>
      <PageTitle>{type}</PageTitle>
      <S.FormInputBox>
        <S.FormInputEssential reverse={true}>
          <S.SpanDot />
          <span>표기된 항목은 필수 입력 사항입니다.</span>
        </S.FormInputEssential>
        <S.FormInputForm>
          <S.FormInputInformation>글 정보</S.FormInputInformation>
          <S.FormInputType>
            <S.FormInputDisplay>
              <S.FormInputInfoTitle>
                글 유형
                <S.SpanDot />
              </S.FormInputInfoTitle>
              <S.InputContainer>
                <DropDown
                  label=""
                  id="type"
                  onChange={(selectedValue) =>
                    onFormInputChange('type', selectedValue)
                  }
                  value={selectedType}>
                  <option value="">유형 선택</option>
                  <option value="0">Notice board</option>
                  <option value="1">Family</option>
                  <option value="2">Children</option>
                  <option value="3">Academics</option>
                  <option value="4">Sports</option>
                  <option value="5">Pets</option>
                  <option value="6">E-books</option>
                </DropDown>
                <FilesInputButton
                  text="파일업로드"
                  onChange={onFilesUpload}></FilesInputButton>
              </S.InputContainer>
            </S.FormInputDisplay>
            <S.FormInputDisplay>
              <S.FormInputInfoTitle>
                제목
                <S.SpanDot />
              </S.FormInputInfoTitle>
              <S.FormInputTitle
                placeholder="문의 제목 입력"
                onChange={(e) => onFormInputChange('title', e.target.value)}
                value={formData.title}
              />
            </S.FormInputDisplay>

            <S.FormInputDisplay>
              <S.FormInputInfoTitle>
                내용
                <S.SpanDot />
              </S.FormInputInfoTitle>
              <div>
                <S.FormInputContent
                  value={formData.content}
                  onChange={(e) => onFormInputChange('content', e.target.value)}
                />
                <S.FormInputLetters>
                  ({formData.content.length}/2000bytes)
                </S.FormInputLetters>
              </div>
            </S.FormInputDisplay>
          </S.FormInputType>
        </S.FormInputForm>

        <FormButton
          buttonLabels={buttonLabels}
          onDoneButtonClick={onDoneButtonClick}
          onGoBack={onGoBack}></FormButton>
      </S.FormInputBox>
    </>
  );
};

export default FormPage;
