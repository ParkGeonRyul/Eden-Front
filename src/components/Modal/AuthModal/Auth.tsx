'use client';

import React, { useState } from 'react';
import useModal from '@/hooks/useModal/usemodal';
import AgreeMent from './AgreeMent/AgreeMent';
import SignComplete from './SignComplete/SignComplete';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import * as S from './auth.styled';

const INITIAL_MODAL = 'SignIn';

const Auth = () => {
  const { Modal, open, close } = useModal();

  const [currentModal, setCurrentModal] =
    useState<keyof typeof AuthModal>(INITIAL_MODAL);

  const closeModal = () => {
    setCurrentModal(INITIAL_MODAL);
    close();
  };

  const AuthModal = {
    SignIn: (
      <SignIn
        close={closeModal}
        goToAgreeMent={() => setCurrentModal('AgreeMent')}
      />
    ),
    AgreeMent: (
      <AgreeMent
        close={closeModal}
        goToSignUp={() => setCurrentModal('SignUp')}
        goToPrevious={() => setCurrentModal('SignIn')}
      />
    ),
    SignUp: (
      <SignUp
        close={closeModal}
        goToPrevious={() => setCurrentModal('AgreeMent')}
        goToSignComplete={() => setCurrentModal('SignComplete')}
      />
    ),
    SignComplete: (
      <SignComplete
        close={closeModal}
        goToSignIn={() => setCurrentModal('SignIn')}
      />
    ),
  } as const;

  return (
    <>
      <S.LoginButton onClick={open}>LOGIN</S.LoginButton>
      <Modal>{AuthModal[currentModal]}</Modal>
    </>
  );
};

export default Auth;
