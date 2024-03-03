import { InquiryData } from '@/types/apis/inquiryData';

export const validateInquiryData = ({
  selectedType,
  title,
  content,
  userFirstName,
  userLastName,
  emailId,
  emailDomain,
  isCheckboxChecked,
}: InquiryData) => {
  const isTypeValid = selectedType !== '';
  const isTitleValid = title.trim() !== '';
  const isContentValid = content.trim() !== '';
  const isUserFirstNameValid = userFirstName.trim() !== '';
  const isUserLastNameValid = userLastName.trim() !== '';
  const isEmailIdValid = emailId.trim() !== '';
  const isEmailDomainValid = emailDomain.trim() !== '';
  return (
    isTypeValid &&
    isTitleValid &&
    isContentValid &&
    isUserFirstNameValid &&
    isUserLastNameValid &&
    isEmailIdValid &&
    isEmailDomainValid &&
    isCheckboxChecked
  );
};

export const isContentLengthValid = (value: string) => value.length <= 2000;
