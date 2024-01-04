import { ReactNode } from 'react';
import * as S from './checkBox.style';

interface Props {
  children?: ReactNode;
  position?: 'left' | 'right';
}

const CheckBox = (props: Props) => {
  const { position, children } = props;
  return (
    <div>
      <S.CheckBoxDisplay position={position}>
        <S.CheckBox type="checkbox" />
        {children}
      </S.CheckBoxDisplay>
    </div>
  );
};

export default CheckBox;
