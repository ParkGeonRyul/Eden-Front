import { InquiryData } from '@/types/apis/inquiryData';

export const validateInquiryData = ({
  selectedType,
  title,
  content,
  name,
  emailId,
  emailDomain,
  isCheckboxChecked,
}: InquiryData) => {
  const isTypeValid = selectedType !== '';
  const isTitleValid = title.trim() !== '';
  const isContentValid = content.trim() !== '';
  const isNameValid = name.trim() !== '';
  const isEmailIdValid = emailId.trim() !== '';
  const isEmailValid = emailDomain.trim() !== '';
  return (
    isTypeValid &&
    isTitleValid &&
    isContentValid &&
    isNameValid &&
    isEmailIdValid &&
    isEmailValid &&
    isCheckboxChecked
  );
};

export const isContentLengthValid = (value: string) => value.length <= 2000;
