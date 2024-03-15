import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import * as S from './formButton.style';

interface FormButtonProps {
  buttonLabels: {
    done: string;
    goBack: string;
  };
  onDoneButtonClick: () => void;
  onGoBack: () => void;
}

export default function FormButton({
  buttonLabels,
  onDoneButtonClick,
  onGoBack,
}: FormButtonProps) {
  return (
    <S.FormInputButton>
      <CommonButton type="primary" isActive={true} onClick={onDoneButtonClick}>
        {buttonLabels.done}
      </CommonButton>
      <CommonButton type="secondary" isActive={true} onClick={onGoBack}>
        {buttonLabels.goBack}
      </CommonButton>
    </S.FormInputButton>
  );
}
