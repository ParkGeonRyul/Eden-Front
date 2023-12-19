import * as S from './adminListDetailPage.style';

const AdminListDetailPage = () => {
  return (
    <S.AdminListDetailPage>
      <S.Title>PET</S.Title>
      <S.InquiryDetailContainer>
        <S.HeaderContainer>
          <S.InquiryHeader>
            <S.InquiryTitle>우리집고양이 정모래</S.InquiryTitle>
            <S.InquiryInfo>
              <S.InquiryDate>2023.10.19</S.InquiryDate>
              <S.InquiryState>답변대기</S.InquiryState>
              {/* <S.InquiryState>답변완료</S.InquiryState> */}
            </S.InquiryInfo>
          </S.InquiryHeader>
          <S.UserInfo>
            <S.UserName>이름</S.UserName>/<S.UserEmail>이메일</S.UserEmail>
          </S.UserInfo>
        </S.HeaderContainer>
        <S.InquiryBody>
          Lorem ipsum dolor sit amet consectetur. Ultrices tristique a elit
          tempor diam amet. Suscipit arcu bibendum malesuada tincidunt erat
          nulla turpis fermentum velit. Aliquam quam enim morbi orci turpis amet
          adipiscing justo. Id turpis nibh arcu phasellus imperdiet.
        </S.InquiryBody>
      </S.InquiryDetailContainer>
      <S.ReviewContainer>
        <S.AnswerContainer>
          <S.AnswerWriteBox placeholder="답변을 적어주세요"></S.AnswerWriteBox>
          <S.AnswerButton>답변하기</S.AnswerButton>
        </S.AnswerContainer>
        <S.ReviewHeader>
          <S.ReviewTitle>admin</S.ReviewTitle>
          <S.ReviewInfo>
            <S.ButtonBox>
              <S.ModifyButton>수정</S.ModifyButton>
              <S.DeleteButton>삭제</S.DeleteButton>
            </S.ButtonBox>
            <S.ReviewDate>2023.11.28</S.ReviewDate>
          </S.ReviewInfo>
        </S.ReviewHeader>
        <S.ReviewBody>
          고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래
          귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는
          원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래
          귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는
          원래 귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래
          귀엽습니다.고양이는 원래 귀엽습니다.고양이는 원래 귀엽습니다.
        </S.ReviewBody>
      </S.ReviewContainer>
      <S.InquiryTable>
        <S.TableHeader>
          <S.TableTitle>전체보기</S.TableTitle>
          <S.TableCount>n개의 문의</S.TableCount>
        </S.TableHeader>
        <S.TableList>
          <S.ListCategory>
            <S.ListTitle>글제목</S.ListTitle>
            <S.ListInfo>
              <S.ListState>답변여부</S.ListState>
              <S.ListDate>작성일</S.ListDate>
            </S.ListInfo>
          </S.ListCategory>
          <S.WriteList>
            <S.WriteTitle>문의제목</S.WriteTitle>
            <S.ListInfo>
              <S.WriteStateComplete>완료</S.WriteStateComplete>
              {/* <S.WriteStateWait>대기</S.WriteStateWait> */}
              <S.WriteDate>2023.12.19</S.WriteDate>
            </S.ListInfo>
          </S.WriteList>
        </S.TableList>
      </S.InquiryTable>
      <S.ViewsBox>조회수 : 00</S.ViewsBox>
    </S.AdminListDetailPage>
  );
};

export default AdminListDetailPage;
