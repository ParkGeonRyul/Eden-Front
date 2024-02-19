'use client';
import React, { useState } from 'react';
import * as S from './detailPage.style';
import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import InquiryContent from '@/components/InquiryDetail/InquiryContent/InquiryContent';
import AnswerContent from '@/components/InquiryDetail/AnswerContent/AnswerContent';
import ListContent from '@/components/InquiryDetail/ListContent/ListContent';

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
