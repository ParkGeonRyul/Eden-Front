import Image from 'next/image';
import * as S from '@/components/common/Button/SelectButton/selectButton.style';

interface ButtonProps {
  isSelected?: boolean;
  children: string;
}

const SelectedButton: React.FC<ButtonProps> = ({ isSelected, children }) => {
  return <S.StyledButton isSelected={isSelected}>{children}</S.StyledButton>;
};

export default SelectedButton;
