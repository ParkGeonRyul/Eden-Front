'use client';
import styled from 'styled-components';

export const Inquiry = styled.div`
  color: ${({ theme }) => theme.colorTheme.sub};
`;

export const InquirySection = styled.div`
  padding: 0 200px;
`;

export const InquiryTitle = styled.div`
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 60.703px;
  font-style: normal;
  font-weight: 300;
  margin: 98px auto 30px;
`;

export const InquirySubtitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 90px;
`;

export const Section = styled.section`
  width: 1081px;
  height: 864px;
  margin: 0 auto;
`;

export const InquiryEssential = styled.span`
  font-size: 14px;
  display: flex;
  flex-direction: row-reverse;
`;

export const InquiryForm = styled.div`
  display: flex;
  padding: 32px 0 80px;
  border-top: solid 1px #4b4b4b;
  border-bottom: solid 1px #4b4b4b;
  justify-content: flex-start;
  margin-bottom: 31px;
`;

export const InquiryInformation = styled.div`
  width: 200px;
  display: flex;
  font-size: 22.5px;
`;

export const InquiryType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 27px;
`;

export const InquiryDisplay = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InquiryInfoTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 110px;
`;

export const TypeChoice = styled.select`
  width: 270px;
  height: 52px;
  padding: 15.5px 9px;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="18px" height="18px"><path d="M7 10l5 5 5-5z" /></svg>');
  background-position: right 10px top 50%;
  padding-right: 27px;
  border: 1px solid #cdcdcd;
`;

export const InputTitle = styled.input`
  width: 770px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
`;

export const InputContent = styled.textarea`
  width: 770px;
  height: 170px;
  resize: none;
  padding: 15.5px 9px;
  margin-bottom: 16px;
  border: 1px solid #cdcdcd;
`;

export const InputLetters = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const InputName = styled.input`
  width: 276px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
`;

export const InputEmail = styled.input`
  width: 235px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
`;

export const At = styled.span`
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 16px;
`;

export const EmailChoice = styled.select`
  width: 235px;
  height: 52px;
  padding: 15.5px 9px;
  margin-left: 16px;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="18px" height="18px"><path d="M7 10l5 5 5-5z" /></svg>');
  background-position: right 10px top 50%;
  padding-right: 27px;
  border: 1px solid #cdcdcd;
`;

export const Privacy = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 72px;
`;

export const PersonalInfo = styled.div`
  width: 200px;
  display: flex;
  font-size: 22.5px;
  flex-direction: column;
  justify-content: center;
`;

export const CheckBoxDisplay = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewContent = styled.span`
  text-decoration: underline;
  margin-left: 15px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  gap: 36.5px;
`;

export const InquiryButton = styled.button`
  width: 173px;
  height: 62px;
  padding: 19px 52.5px;
  background: #e4d5c2;
`;

export const CheckButton = styled.button`
  width: 173px;
  height: 62px;
  padding: 19px 52.5px;
  border: 1px solid #707070;
`;
