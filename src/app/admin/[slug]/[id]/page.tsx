'use client';

import React, { useState } from 'react';
import AnswerContent from '@/components/InquiryDetail/AnswerContent/AnswerContent';
import InquiryContent from '@/components/InquiryDetail/InquiryContent/InquiryContent';
import ListContent from '@/components/InquiryDetail/ListContent/ListContent';
import Mainpage from '@/components/common/MainPage/MainPage';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import * as S from './detailPage.style';

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
