import React from 'react';
import * as S from './basicInfoSection.style';

type BasicInfoSectionProps = {
  label: string;
  value: string | null;
  onChange?: (value: string) => void;
  onClick?: () => void;
  active?: boolean;
};

const BasicInfoSection = ({
  label,
  value,
  onChange,
  onClick,
  active = false,
}: BasicInfoSectionProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const displayValue = value === null ? '' : value;

  return (
    <S.InfoSection>
      <S.InfoMenu>{label}</S.InfoMenu>
      {active ? (
        <S.InfoContent
          value={displayValue}
          onChange={handleChange}
          onClick={onClick}
          active={true}
        />
      ) : (
        <S.InfoContent value={displayValue} active={false} />
      )}
    </S.InfoSection>
  );
};

export default BasicInfoSection;
