import * as S from './inquiry.style';

export default function Inquiry() {
  return (
    <>
      <S.GlobalStyle />
      <S.InquirySection>
        <S.InquiryTitle>1:1 INQUIRY</S.InquiryTitle>
        <S.InquirySubtitle>
          소중한 의견을 최대한 반영하여 더 나은 서비스로 보답하겠습니다.
        </S.InquirySubtitle>
        <S.Section>
          <S.InquiryEssential>
            표기된 항목은 필수 입력 사항입니다.
          </S.InquiryEssential>
          <S.InquiryForm>
            <S.InquiryInformation>문의정보</S.InquiryInformation>
            <S.InquiryType>
              <S.InquiryDisplay>
                <S.InquiryInfoTitle id="type">문의유형</S.InquiryInfoTitle>
                <div>
                  <S.TypeChoice id="type">
                    <option value="1">문의유형선택</option>
                    <option value="2">PET</option>
                    <option value="3">CHILD</option>
                    <option value="4">SPORTS</option>
                    <option value="5">FAMILY</option>
                    <option value="6">기타</option>
                  </S.TypeChoice>
                </div>
              </S.InquiryDisplay>
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
                <div>
                  <S.EmailChoice id="type">
                    <option value="1">직접입력</option>
                    <option value="2">naver.com</option>
                    <option value="3">hanmail.net</option>
                    <option value="4">gmail.com</option>
                    <option value="5">nate.com</option>
                    <option value="6">hotmail.com</option>
                  </S.EmailChoice>
                </div>
              </S.InquiryDisplay>
            </S.InquiryType>
          </S.InquiryForm>
          <S.Privacy>
            <S.PersonalInfo>개인정보 수집 동의</S.PersonalInfo>
            <div>
              <S.InputCheck>
                <input type="checkbox" />
                개인정보 수집항목 및 이용 동의 (필수)
                <S.ViewContent>내용보기</S.ViewContent>
              </S.InputCheck>
            </div>
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
