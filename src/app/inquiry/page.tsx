'use client';
import PageTitle from '@/components/PageTitle/PageTitle';
import CheckBox from '@/components/CheckBox/CheckBox';
import Mainpage from '@/components/MainPage/MainPage';
import DropDown from '@/components/DropDown/DropDown';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import * as S from './inquiry.style';

export default function Inquiry() {
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
                  options={[
                    { value: '1', label: '문의유형선택' },
                    { value: '2', label: 'PET' },
                    { value: '3', label: 'CHILD' },
                    { value: '4', label: 'SPORTS' },
                    { value: '5', label: 'FAMILY' },
                    { value: '6', label: '기타' },
                  ]}
                  placeholder="문의유형선택"
                  id="type"
                />
              </S.InquiryDisplay>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  제목
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <S.InputTitle placeholder="문의 제목 입력" />
              </S.InquiryDisplay>

              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  내용
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <div>
                  <S.InputContent />
                  <S.InputLetters>(0/2000bytes)</S.InputLetters>
                </div>
              </S.InquiryDisplay>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  이름
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <S.InputName placeholder="이름 입력" />
              </S.InquiryDisplay>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle>
                  이메일
                  <S.SpanDot />
                </S.InquiryInfoTitle>
                <S.InputEmail placeholder="이메일 입력" />
                <S.At>@</S.At>
                <S.InputEmail placeholder="이메일 주소 입력" />
                <DropDown
                  label=""
                  options={[
                    { value: '1', label: 'naver.com' },
                    { value: '2', label: 'hanmail.net' },
                    { value: '3', label: 'gmail.com' },
                    { value: '4', label: 'nate.com' },
                    { value: '5', label: 'hotmail.com' },
                  ]}
                  placeholder="직접입력"
                  id="email"
                />
              </S.InquiryDisplay>
            </S.InquiryType>
          </S.InquiryForm>
          <S.AgreeContainer>
            <S.Agree>개인정보 수집 동의</S.Agree>
            <CheckBox position="left">
              개인정보 수집항목 및 이용동의 (필수)
            </CheckBox>
            <S.ViewContent>내용보기</S.ViewContent>
          </S.AgreeContainer>
          <S.InquiryButton>
            <CommonButton type="primary" isActive={true}>
              문의하기
            </CommonButton>
            <CommonButton type="secondary" isActive={true}>
              조회하기
            </CommonButton>
          </S.InquiryButton>
        </S.InquiryBox>
      </Mainpage>
    </>
  );
}
