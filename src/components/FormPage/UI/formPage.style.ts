import styled from 'styled-components';

export const FormInputBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
`;

interface FormInputEssentialProps {
  reverse?: boolean;
}

export const FormInputEssential = styled.div<FormInputEssentialProps>`
  display: flex;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
  align-items: center;
`;

export const FormInputForm = styled.div`
  display: flex;
  padding: 32px 0 80px;
  border-top: solid 1px #4b4b4b;
  border-bottom: solid 1px #4b4b4b;
`;

export const FormInputInformation = styled.div`
  width: 200px;
  font-size: 22.5px;
`;

export const FormInputType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 27px;
`;

export const FormInputDisplay = styled.div`
  display: flex;
`;

export const FormInputInfoTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 110px;
  gap: 5px;
`;

export const FormInputTitle = styled.input`
  width: 770px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
  outline: none;
`;

export const FormInputContent = styled.textarea`
  width: 770px;
  height: 170px;
  resize: none;
  padding: 15.5px 9px;
  margin-bottom: 16px;
  border: 1px solid #cdcdcd;
  outline: none;
`;

export const FormInputLetters = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const FormInputName = styled.input`
  width: 276px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
  outline: none;
`;

export const FormInputEmail = styled.input`
  width: 235px;
  height: 52px;
  padding: 15.5px 9px;
  border: 1px solid #cdcdcd;
  margin-right: 16px;
  outline: none;
`;

export const At = styled.span`
  font-size: 17px;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const ViewContent = styled.span`
  border-bottom: 1px solid #6f6f6f;
  margin-left: 16px;
  font-size: 15px;
  color: #6f6f6f;
`;

export const SpanDot = styled.div`
  color: #ff0000;
  margin: 5px;
  width: 4px;
  height: 4px;
  background-color: #ff0000;
  border-radius: 50%;
`;

export const InputContainer = styled.div`
  width: 770px;
  display: flex;
  justify-content: space-between;
`;
