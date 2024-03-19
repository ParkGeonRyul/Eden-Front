'use client';

import { useEffect, useState } from 'react';
import AuthButton from '@/components/common/Button/AuthButton/AuthButton';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import * as I from '@/components/icons';
import * as S from './signUp.style';

interface SignUpProps {
  close: () => void;
  goToPrevious: () => void;
  goToSignComplete: () => void;
}

interface FieldInfo {
  value?: string;
  hasError?: boolean;
  errorMessage?: string;
}

interface UserInfo {
  userId: FieldInfo;
  password: FieldInfo;
  confirmPassword: FieldInfo;
  firstName: FieldInfo;
  lastName: FieldInfo;
  email: FieldInfo;
  authEmail: FieldInfo;
  cellPhoneNumber: FieldInfo;
}

const SignUp = ({ close, goToPrevious, goToSignComplete }: SignUpProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: { value: '', hasError: false, errorMessage: '' },
    password: { value: '', hasError: false, errorMessage: '' },
    confirmPassword: { value: '', hasError: false, errorMessage: '' },
    firstName: { value: '', hasError: false, errorMessage: '' },
    lastName: { value: '', hasError: false, errorMessage: '' },
    email: { value: '', hasError: false, errorMessage: '' },
    authEmail: { value: '', hasError: false, errorMessage: '' },
    cellPhoneNumber: { value: '', hasError: false, errorMessage: '' },
  });
  const [timer, setTimer] = useState<number>(600);
  const [authRequest, setAuthRequest] = useState<boolean>(false);
  const [timerVisible, setTimerVisible] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof UserInfo,
  ) => {
    const value = e.target.value;

    if (fieldName === 'userId') {
      const userIdRegex = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/;
      if (!userIdRegex.test(value)) {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage:
              '영문으로 시작하는 6~12자리의 영문, 숫자만 입력해주세요.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }

    if (fieldName === 'password') {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
      if (!passwordRegex.test(value)) {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage:
              '8~15자리의 영문(대소문자 구문)/숫자/특수문자 조합으로 입력해주세요.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }

    if (fieldName === 'confirmPassword') {
      if (userInfo.password.value !== value) {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage: '비밀번호가 일치하지 않습니다.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }

    if (fieldName === 'firstName') {
      if (value.trim() === '') {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage: '이름을 입력해주세요.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }

    if (fieldName === 'lastName') {
      if (value.trim() === '') {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage: '성을 입력해주세요.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }

    if (fieldName === 'email') {
      const emailRegex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      if (!emailRegex.test(value)) {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage: '올바른 이메일 형식이 아닙니다.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }

    if (fieldName === 'authEmail') {
      const numberRegex = /^\d{4}$/;
      if (!numberRegex.test(value)) {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage: '인증번호가 일치하지 않습니다.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }

    if (fieldName === 'cellPhoneNumber') {
      const numberRegex = /^\d{11}$/;
      if (!numberRegex.test(value)) {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: true,
            errorMessage: '올바른 형식의 휴대폰 번호가 아닙니다.',
          },
        }));
      } else {
        setUserInfo((prevState) => ({
          ...prevState,
          [fieldName]: {
            value: value,
            hasError: false,
            errorMessage: '',
          },
        }));
      }
    }
  };

  useEffect(() => {
    const allFieldsValid = Object.values(userInfo).every((field) => {
      return !field.hasError && field.value.trim() !== '';
    });
    setIsActive(allFieldsValid);
  }, [userInfo]);

  function formatTimer(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;

    const formatMinutes = minutes.toString().padStart(2, '0');
    const formatSeconds = secondsRemaining.toString().padStart(2, '0');

    return `${formatMinutes}:${formatSeconds}`;
  }

  useEffect(() => {
    if (authRequest && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        if (timer === 0) {
          clearInterval(intervalId);
          setTimerVisible(false);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [authRequest, timer]);

  const handleAuthRequest = () => {
    setAuthRequest(true);
    setTimer(600);
    setTimerVisible(true);
  };

  const handleCertification = () => {
    if (timer === 0) {
      alert('인증시간이 만료되었습니다.');
    }
  };

  return (
    <>
      <S.BackGround>
        <S.CloseBtn onClick={close}>
          <I.ModalCloseButton />
        </S.CloseBtn>
        <S.Header>회원 가입</S.Header>

        <S.Container>
          <S.InfoBox>
            <S.SpanDot />
            <S.InfoHead>표기된 항목은 필수 입력 사항입니다.</S.InfoHead>
          </S.InfoBox>
          <S.InputContainer>
            <S.InputCategory>
              <S.CategoryInfo>
                <S.CategoryBox>
                  <S.SpanDot />
                  <S.CategoryName>아이디</S.CategoryName>
                </S.CategoryBox>
                <S.ErrorSpan hasError={userInfo.userId.hasError}>
                  {userInfo.userId.errorMessage}
                </S.ErrorSpan>
              </S.CategoryInfo>
              <S.InputContent
                hasError={userInfo.userId.hasError}
                placeholder="영문으로 시작하는 6~12자리의 영문, 숫자만 입력해주세요."
                onChange={(e) => handleInputChange(e, 'userId')}
                maxLength={12}
              />
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryInfo>
                <S.CategoryBox>
                  <S.SpanDot />
                  <S.CategoryName>비밀번호</S.CategoryName>
                </S.CategoryBox>
                <S.ErrorSpan hasError={userInfo.password.hasError}>
                  {userInfo.password.errorMessage}
                </S.ErrorSpan>
              </S.CategoryInfo>
              <S.InputContent
                type="password"
                hasError={userInfo.password.hasError}
                placeholder="8~15자리의 영문(대소문자 구문)/숫자/특수문자 조합으로 입력해주세요."
                onChange={(e) => handleInputChange(e, 'password')}
                maxLength={15}
              />
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryInfo>
                <S.CategoryBox>
                  <S.SpanDot />
                  <S.CategoryName>비밀번호 확인</S.CategoryName>
                </S.CategoryBox>
                <S.ErrorSpan hasError={userInfo.confirmPassword.hasError}>
                  {userInfo.confirmPassword.errorMessage}
                </S.ErrorSpan>
              </S.CategoryInfo>
              <S.InputContent
                type="password"
                hasError={userInfo.confirmPassword.hasError}
                placeholder="비밀번호를 다시 입력해주세요"
                onChange={(e) => handleInputChange(e, 'confirmPassword')}
                maxLength={15}
              />
            </S.InputCategory>
            <S.NameCategory>
              <S.InputCategory>
                <S.CategoryInfo>
                  <S.CategoryBox>
                    <S.SpanDot />
                    <S.CategoryName>이름</S.CategoryName>
                  </S.CategoryBox>
                  <S.ErrorSpan hasError={userInfo.firstName.hasError}>
                    {userInfo.firstName.errorMessage}
                  </S.ErrorSpan>
                </S.CategoryInfo>
                <S.InputContent
                  hasError={userInfo.firstName.hasError}
                  placeholder=""
                  onChange={(e) => handleInputChange(e, 'firstName')}
                />
              </S.InputCategory>
              <S.InputCategory>
                <S.CategoryInfo>
                  <S.CategoryBox>
                    <S.SpanDot />
                    <S.CategoryName>성</S.CategoryName>
                  </S.CategoryBox>
                  <S.ErrorSpan hasError={userInfo.lastName.hasError}>
                    {userInfo.lastName.errorMessage}
                  </S.ErrorSpan>
                </S.CategoryInfo>
                <S.InputContent
                  hasError={userInfo.lastName.hasError}
                  placeholder=""
                  onChange={(e) => handleInputChange(e, 'lastName')}
                />
              </S.InputCategory>
            </S.NameCategory>
            <S.InputCategory>
              <S.CategoryInfo>
                <S.CategoryBox>
                  <S.SpanDot />
                  <S.CategoryName>이메일</S.CategoryName>
                </S.CategoryBox>
                <S.ErrorSpan hasError={userInfo.email.hasError}>
                  {userInfo.email.errorMessage}
                </S.ErrorSpan>
              </S.CategoryInfo>
              <S.CertifiedContainer>
                <S.InputContent
                  hasError={userInfo.email.hasError}
                  placeholder="이메일을 적어주세요."
                  onChange={(e) => handleInputChange(e, 'email')}
                />
                <AuthButton onClick={handleAuthRequest}>인증요청</AuthButton>
              </S.CertifiedContainer>
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryInfo>
                <S.CategoryBox>
                  <S.SpanDot />
                  <S.CategoryName>인증번호</S.CategoryName>
                </S.CategoryBox>
                <S.ErrorSpan hasError={userInfo.authEmail.hasError}>
                  {userInfo.authEmail.errorMessage}
                </S.ErrorSpan>
              </S.CategoryInfo>
              <S.CertifiedContainer>
                <S.TimerContainer>
                  <S.InputContent
                    hasError={userInfo.authEmail.hasError}
                    placeholder="인증번호 4자리를 입력해주세요."
                    onChange={(e) => handleInputChange(e, 'authEmail')}
                    maxLength={4}
                  />
                  {timerVisible && <S.Timer>{formatTimer(timer)}</S.Timer>}
                </S.TimerContainer>
                <AuthButton onClick={handleCertification}>본인인증</AuthButton>
              </S.CertifiedContainer>
            </S.InputCategory>
            <S.InputCategory>
              <S.CategoryInfo>
                <S.CategoryBox>
                  <S.SpanDot />
                  <S.CategoryName>휴대폰</S.CategoryName>
                </S.CategoryBox>
                <S.ErrorSpan hasError={userInfo.cellPhoneNumber.hasError}>
                  {userInfo.cellPhoneNumber.errorMessage}
                </S.ErrorSpan>
              </S.CategoryInfo>
              <S.InputContent
                hasError={userInfo.cellPhoneNumber.hasError}
                placeholder="-없이 입력해주세요."
                onChange={(e) => handleInputChange(e, 'cellPhoneNumber')}
                maxLength={11}
              />
            </S.InputCategory>
          </S.InputContainer>
        </S.Container>

        <S.ButtonContainer>
          <CommonButton
            type="secondary"
            isActive={true}
            onClick={goToPrevious}
            wide>
            이전
          </CommonButton>
          <CommonButton
            type="primary"
            isActive={isActive}
            wide
            onClick={goToSignComplete}>
            회원가입
          </CommonButton>
        </S.ButtonContainer>
      </S.BackGround>
    </>
  );
};

export default SignUp;
