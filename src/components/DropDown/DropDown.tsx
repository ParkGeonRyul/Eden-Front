import * as S from './dropDown.style';
import { ReactNode, ChangeEvent } from 'react';

interface DropDownProps {
  label?: string;
  id: string;
  onChange: (selectedValue: string) => void;
  children?: ReactNode;
}

const DropDown = ({ label, id, onChange, children }: DropDownProps) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <S.Display>
      {label && <S.InfoTitle>{label}</S.InfoTitle>}
      <div>
        <S.TypeChoice id={id} onChange={handleSelectChange}>
          {children}
        </S.TypeChoice>
      </div>
    </S.Display>
  );
};

export default DropDown;
