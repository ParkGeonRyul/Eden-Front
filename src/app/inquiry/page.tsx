'use client';

import { useState } from 'react';
import InquiryModal from '@/components/Modal/InquiryModal/InquiryModal';
import SearchModal from '@/components/Modal/SearchModal/SearchModal';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import DropDown from '@/components/common/DropDown/DropDown';
import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import useModal from '@/hooks/useModal/usemodal';
import {
  isContentLengthValid,
  validateInquiryData,
} from '@/utils/inquiry/validateInquiryData';
import * as S from './inquiry.style';

export default function Inquiry() {
  const { Modal, open, close } = useModal();

  const [isInquiry, setIsInquiry] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [formData, setFormData] = useState({
    selectedType: '',
    title: '',
    content: '',
    userFirstName: '',
    userLastName: '',
    emailId: '',
    emailDomain: '',
    isCustomDomain: true,
  });

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
        alert(
          '문의유형과 제목, 내용, 이메일 아이디, 이메일을 모두 입력해주세요.',
        );
      }
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    console.log(`${fieldName}: ${value}`);
    if (fieldName === 'content' && !isContentLengthValid(value)) {
      alert('내용은 2000자를 초과할 수 없습니다.');
      return;
    }

    // 드롭다운에서 'emailDomain'이 선택되었는지 확인 및 'isCustomDomain' 상태 업데이트
    if (fieldName === 'emailDomain') {
      const isCustom = value === '';
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
        isCustomDomain: isCustom,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
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
                  onChange={(selectedType) =>
                    handleInputChange('selectedType', selectedType)
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
                  onChange={(e) =>
                    handleInputChange('userFirstName', e.target.value)
                  }
                />
                <S.InputName
                  placeholder="성 입력"
                  onChange={(e) =>
                    handleInputChange('userLastName', e.target.value)
                  }
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
                      handleInputChange('emailDomain', e.target.value)
                    }
                    value={formData.emailDomain}
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
              <InquiryModal close={close} />
            </Modal>
          ) : (
            <Modal>
              <SearchModal close={close} />
            </Modal>
          )}
        </S.InquiryBox>
      </Mainpage>
    </>
  );
}
