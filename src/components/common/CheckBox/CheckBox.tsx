import { ChangeEvent, ReactNode } from 'react';
import * as S from './checkBox.style';

interface Props {
  children?: ReactNode;
  position?: 'left' | 'right';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const CheckBox = (props: Props) => {
  const { position, children, onChange, checked } = props;
  return (
    <div>
      <S.CheckBoxDisplay position={position}>
        <S.CheckBox type="checkbox" onChange={onChange} checked={checked} />
        {children}
      </S.CheckBoxDisplay>
    </div>
  );
};

export default CheckBox;
