'use client';
import { useState } from 'react';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import Mainpage from '@/components/common/MainPage/MainPage';
import DropDown from '@/components/common/DropDown/DropDown';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import useModal from '@/hooks/useModal/usemodal';
import * as IM from '../../components/Modal/InquiryModal/inquiryModal.style';
import * as SM from '../../components/Modal/InquiryModal/searchModal.style';
import * as S from './inquiry.style';
import Link from 'next/link';
import * as I from '@/components/icons/index';

export default function Inquiry() {
  const { Modal, open, close } = useModal();
  const [isInquiry, setIsInquiry] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [formData, setFormData] = useState({
    selectedType: '0',
    title: '',
    content: '',
    name: '',
    emailId: '',
    emailAddress: '',
    emailDomain: '',
  });

  const isContentLengthValid = (value: string) => value.length <= 2000;

  const updateFormData = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  interface InquiryData {
    selectedType: string;
    title: string;
    content: string;
    emailId: string;
    emailAddress: string;
    emailDomain: string;
    isCheckboxChecked: boolean;
  }

  const TYPE_RANGE = {
    MIN: 1,
    MAX: 5,
  };

  // 유효성 검사 함수
  const validateInquiryData = ({
    selectedType,
    title,
    content,
    emailId,
    emailAddress,
    emailDomain,
    isCheckboxChecked,
  }: InquiryData) => {
    const isTypeValid =
      parseInt(selectedType, 10) >= TYPE_RANGE.MIN &&
      parseInt(selectedType, 10) <= TYPE_RANGE.MAX;
    const isTitleValid = title.trim() !== '';
    const isContentValid = content.trim() !== '';
    const isEmailIdValid = emailId.trim() !== '';
    const isEmailValid =
      emailAddress.trim() !== '' || emailDomain.trim() !== '';
    return (
      isTypeValid &&
      isTitleValid &&
      isContentValid &&
      isEmailIdValid &&
      isEmailValid &&
      isCheckboxChecked
    );
  };

  const handleButtonClick = (buttonType: 'inquiry' | 'search') => {
    // 조회하기 버튼을 눌렀을 때의 로직
    if (buttonType === 'search') {
      setIsInquiry(false);
      open(); // 모달 열기
      console.log(`조회하기 버튼을 눌렀을 때의 모달 내용`);
    }
    // 문의하기 버튼을 눌렀을 때의 로직
    else if (buttonType === 'inquiry') {
      if (validateInquiryData({ ...formData, isCheckboxChecked })) {
        setIsInquiry(true);
        open();
      } else {
        // 필수 항목 누락 시 알림
        alert(
          '문의유형과 제목, 내용, 이메일 아이디, 이메일을 모두 입력해주세요.',
        );
      }
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    console.log(`${fieldName}: ${value}`);

    switch (fieldName) {
      case 'type':
        updateFormData('selectedType', value);
        break;
      case 'title':
        updateFormData('title', value);
        break;
      case 'content':
        if (isContentLengthValid(value)) {
          updateFormData('content', value);
        } else {
          alert('글자 수는 2000자를 초과할 수 없습니다.');
        }
        break;
      case 'name':
        updateFormData('name', value);
        break;
      case 'emailId':
        updateFormData('emailId', value);
        break;
      case 'emailAddress':
        updateFormData('emailAddress', value);
        break;
      case 'emailDomain':
        updateFormData('emailDomain', value);
        updateFormData('emailAddress', value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked((prev) => !prev);
  };

  return (
    <>
      <Mainpage>
        <PageTitle>1:1 INQUIRY</PageTitle>
        <S.InquirySubtitle>
          소중한 의견을 최대한 반영하여 더 나은 서비스로 보답하겠습니다.
        </S.InquirySubtitle>
        <S.InquiryBox>
          <S.InquiryEssential position="right">
            <S.SpanDot />
            <span>표기된 항목은 필수 입력 사항입니다.</span>
          </S.InquiryEssential>
          <S.InquiryForm>
            <S.InquiryInformation> 문의정보</S.InquiryInformation>
            <S.InquiryType>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  문의유형
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <DropDown
                  label=""
                  id="type"
                  onChange={(selectedValue) =>
                    handleInputChange('type', selectedValue)
                  }>
                  <option value="">유형 선택</option>
                  <option value="1">PET</option>
                  <option value="2">CHILD</option>
                  <option value="3">SPORTS</option>
                  <option value="4">FAMILY</option>
                  <option value="5">기타</option>
                </DropDown>
              </S.InquiryDisplay>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  제목
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <S.InputTitle
                  placeholder="문의 제목 입력"
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  value={formData.title}
                />
              </S.InquiryDisplay>

              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  내용
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <div>
                  <S.InputContent
                    value={formData.content}
                    onChange={(e) =>
                      handleInputChange('content', e.target.value)
                    }
                  />
                  <S.InputLetters>
                    ({formData.content.length}/2000bytes)
                  </S.InputLetters>
                </div>
              </S.InquiryDisplay>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  이름
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <S.InputName
                  placeholder="이름 입력"
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </S.InquiryDisplay>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  이메일
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <>
                  <S.InputEmail
                    placeholder="이메일 아이디"
                    onChange={(e) =>
                      handleInputChange('emailId', e.target.value)
                    }
                  />
                  <S.At>@</S.At>
                  <S.InputEmail
                    placeholder="이메일 주소 입력"
                    onChange={(e) =>
                      handleInputChange('emailAddress', e.target.value)
                    }
                    value={formData.emailAddress}
                  />
                  <DropDown
                    label=""
                    id="emailDomain"
                    onChange={(selectedValue) =>
                      handleInputChange('emailDomain', selectedValue)
                    }>
                    <option value="">이메일주소입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="hotmail.com">hotmail.com</option>
                  </DropDown>
                </>
              </S.InquiryDisplay>
            </S.InquiryType>
          </S.InquiryForm>
          <S.AgreeContainer>
            <S.Agree>개인정보 수집 동의</S.Agree>
            <CheckBox
              position="left"
              onChange={handleCheckboxChange}
              checked={isCheckboxChecked}>
              개인정보 수집항목 및 이용동의 (필수)
            </CheckBox>
            <S.ViewContent>내용보기</S.ViewContent>
          </S.AgreeContainer>
          <S.InquiryButton>
            <CommonButton
              type="primary"
              isActive={true}
              onClick={() => handleButtonClick('inquiry')}>
              문의하기
            </CommonButton>
            <CommonButton
              type="secondary"
              isActive={true}
              onClick={() => handleButtonClick('search')}>
              조회하기
            </CommonButton>
          </S.InquiryButton>

          {isInquiry ? (
            <Modal>
              <IM.InquiryModal>
                <IM.CloseButton onClick={close}>X</IM.CloseButton>
                <IM.ModalTitle>문의가 완료되었습니다.</IM.ModalTitle>
                <IM.ModalContent>
                  {
                    '문의가 입력하신 이메일(sample@naver.com)로 안내 메일을 보냈습니다.\n코드번호로 작성하신 문의를 확인할 수 있습니다.'
                  }
                  <IM.SvgContainer>
                    <I.Mail />
                  </IM.SvgContainer>
                </IM.ModalContent>
              </IM.InquiryModal>
            </Modal>
          ) : (
            <Modal>
              <SM.SearchModal>
                <SM.CloseButton onClick={close}>X</SM.CloseButton>

                <SM.ModalBody>
                  <SM.ModalTitle>조회하기</SM.ModalTitle>
                  <SM.InputTitle>이름</SM.InputTitle>
                  <SM.ModalInput placeholder="이름" />
                  <SM.InputTitle>이메일</SM.InputTitle>
                  <SM.ModalInput placeholder="이메일" />
                  <SM.InputTitle>문의번호</SM.InputTitle>
                  <SM.ModalInput placeholder="문의번호" />
                  <Link href="/inquiry/post">
                    <CommonButton
                      wide={true}
                      type="primary"
                      isActive={true}
                      onClick={open}>
                      조회하기
                    </CommonButton>
                  </Link>
                </SM.ModalBody>
              </SM.SearchModal>
            </Modal>
          )}
        </S.InquiryBox>
      </Mainpage>
      <Link href="/inquiry/edit">
        <button>수정</button>
      </Link>
    </>
  );
}
