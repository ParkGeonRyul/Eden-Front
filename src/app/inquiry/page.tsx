'use client';
import PageTitle from '@/components/PageTitle/PageTitle';
import CheckBox from '@/components/CheckBox/CheckBox';
import * as S from './inquiry.style';
import DropDown from '@/components/DropDown/DropDown';

export default function Inquiry() {
  return (
    <>
      <S.InquirySection>
        <PageTitle>1:1 INQUIRY</PageTitle>
        {/* <S.InquiryTitle>1:1 INQUIRY</S.InquiryTitle> */}
        <S.InquirySubtitle>
          소중한 의견을 최대한 반영하여 더 나은 서비스로 보답하겠습니다.
        </S.InquirySubtitle>
        <S.Section>
          <S.InquiryEssential>
            표기된 항목은 필수 입력 사항입니다.
          </S.InquiryEssential>
          <S.InquiryForm>
            <S.InquiryInformation>문의정보</S.InquiryInformation>
            <DropDown
              label="문의유형"
              options={[
                { value: '1', label: 'PET' },
                { value: '2', label: 'CHILD' },
                { value: '3', label: 'SPORTS' },
                { value: '4', label: 'FAMILY' },
                { value: '5', label: '기타' },
              ]}
              placeholder="문의유형선택"
              id="type"
            />
            <S.InquiryDisplay>
              <S.InquiryInfoTitle>제목</S.InquiryInfoTitle>
              <S.InputTitle placeholder="문의 제목 입력" />
            </S.InquiryDisplay>

            <S.InquiryDisplay>
              <S.InquiryInfoTitle>내용</S.InquiryInfoTitle>
              <div>
                <S.InputContent />
                <S.InputLetters>(0/2000bytes)</S.InputLetters>
              </div>
            </S.InquiryDisplay>
            <S.InquiryDisplay>
              <S.InquiryInfoTitle>이름</S.InquiryInfoTitle>
              <S.InputName placeholder="이름입력" />
            </S.InquiryDisplay>
            <S.InquiryDisplay>
              <S.InquiryInfoTitle>이메일</S.InquiryInfoTitle>
              <S.InputEmail placeholder="이메일 입력" />
              <S.At>@</S.At>
              <S.InputEmail placeholder="이메일 주소 입력" />
              <DropDown
                label=""
                options={[
                  { value: '2', label: 'naver.com' },
                  { value: '3', label: 'hanmail.net' },
                  { value: '4', label: 'gmail.com' },
                  { value: '5', label: 'nate.com' },
                  { value: '6', label: 'hotmail.com' },
                ]}
                placeholder="직접입력"
                id="email"></DropDown>
            </S.InquiryDisplay>
          </S.InquiryForm>
          <S.Privacy>
            <S.PersonalInfo>개인정보 수집 동의</S.PersonalInfo>

            <S.CheckBoxDisplay>
              <CheckBox position="left">
                개인정보 수집항목 및 이용동의 (필수)
              </CheckBox>
              <S.ViewContent>내용보기</S.ViewContent>
            </S.CheckBoxDisplay>
          </S.Privacy>
          <S.Button>
            <S.InquiryButton>문의하기</S.InquiryButton>
            <S.CheckButton>조회하기</S.CheckButton>
          </S.Button>
        </S.Section>
      </S.InquirySection>
    </>
  );
}
