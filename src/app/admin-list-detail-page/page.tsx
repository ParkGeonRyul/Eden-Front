'use client';
import React, { useState } from 'react';
import * as S from './adminListDetailPage.style';
import Mainpage from '@/components/MainPage/MainPage';
import PageTitle from '@/components/PageTitle/PageTitle';
import InquiryContent from '@/components/common/InquiryDetail/InquiryContent/InquiryContent';
import AnswerContent from '@/components/common/InquiryDetail/AnswerContent/AnswerContent';
import ListContent from '@/components/common/InquiryDetail/ListContent/ListContent';

const ListDetailPage = () => {
  return (
    <Mainpage>
      <PageTitle>PET</PageTitle>
      <InquiryContent />
      <AnswerContent />
      <ListContent />
    </Mainpage>
  );
};

export default ListDetailPage;
