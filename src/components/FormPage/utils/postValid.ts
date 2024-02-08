import { FormInputData } from '@/interfaces/listPage';

export interface FormInputDataWithSelectedType extends FormInputData {
  selectedType: string;
}

export const isContentLengthValid = (value: string) => value.length <= 2000;

const TYPE_RANGE = {
  MIN: 0,
  MAX: 5,
};

export const validateInputData = ({
  selectedType,
  title,
  content,
}: FormInputDataWithSelectedType) => {
  const isTypeValid =
    parseInt(selectedType, 10) >= TYPE_RANGE.MIN &&
    parseInt(selectedType, 10) <= TYPE_RANGE.MAX;
  const isTitleValid = title.trim() !== '';
  const isContentValid = content.trim() !== '';
  return isTypeValid && isTitleValid && isContentValid;
};
