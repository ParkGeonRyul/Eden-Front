'use client';

import React, { useState } from 'react';
import CommonButton from '@/components/common/Button/CommonButton/CommonButton';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import * as I from '@/components/icons';
import * as S from './agreeMent.style';

interface AgreeMentProps {
  close: () => void;
  goToPrevious: () => void;
  goToSignUp: () => void;
}

interface AgreeItem {
  itemName: string;
  itemRequired: boolean;
}

const AgreeMent = ({ close, goToSignUp, goToPrevious }: AgreeMentProps) => {
  const agreeItemList = [
    { itemName: '회원가입 약관 동의', itemRequired: true },
    { itemName: '개인정보 수집 동의', itemRequired: false },
    {
      itemName: '개인정보 제공에 대한 동의',
      itemRequired: true,
    },
    { itemName: '개인정보 이용 동의', itemRequired: false },
  ];

  const [checkSelected, setCheckSelected] = useState<boolean[]>(
    Array(agreeItemList.length).fill(false),
  );

  const handleCheckBoxChange = (index: number) => {
    const updateCheckSelected = [...checkSelected];
    updateCheckSelected[index] = !updateCheckSelected[index];
    setCheckSelected(updateCheckSelected);
  };

  const allChecked = checkSelected.every(Boolean);

  const nextBtnIsActive = () => {
    const allRequiredChecked = agreeItemList.every((item, index) => {
      return !item.itemRequired || checkSelected[index];
    });

    return allRequiredChecked;
  };

  const nextBtnAgree = () => {
    if (!nextBtnIsActive()) {
      return alert('필수 항목을 모두 체크해주세요');
    }
  };

  return (
    <>
      <S.BackGround>
        <S.CloseBtn onClick={close}>
          <I.ModalCloseButton />
        </S.CloseBtn>

        <S.Header>서비스 약관 동의</S.Header>

        <S.MainContainer>
          <S.AllAgreeMentContainer>
            <S.AllAgreeMentBox>
              <CheckBox
                checked={allChecked}
                onChange={() =>
                  setCheckSelected(checkSelected.map(() => !allChecked))
                }
              />
              <S.AllAgreeMentName>전체 동의</S.AllAgreeMentName>
            </S.AllAgreeMentBox>
            <S.AllAgreeMentInfo>
              전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. 선택 항목에 대한 동의를
              거부하시는 경우에도 서비스 이용이 가능합니다.
            </S.AllAgreeMentInfo>
          </S.AllAgreeMentContainer>
          {agreeItemList.map((item, index) => (
            <S.AgreeMentItem key={index}>
              <S.ItemValue>
                <S.ItemName>{item.itemName}</S.ItemName>
                <S.ItemRequired required={item.itemRequired}>
                  {item.itemRequired ? '(필수)' : '(선택)'}
                </S.ItemRequired>
                <S.ViewTerms>약관보기</S.ViewTerms>
              </S.ItemValue>
              <S.CheckBoxContainer>
                <CheckBox
                  checked={checkSelected[index]}
                  onChange={() => handleCheckBoxChange(index)}
                />
                <S.Agree>동의함</S.Agree>
              </S.CheckBoxContainer>
            </S.AgreeMentItem>
          ))}

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
              isActive={nextBtnIsActive()}
              onClick={nextBtnIsActive() ? goToSignUp : nextBtnAgree}
              wide>
              다음
            </CommonButton>
          </S.ButtonContainer>
        </S.MainContainer>
      </S.BackGround>
    </>
  );
};

export default AgreeMent;
