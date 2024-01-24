import Image from 'next/image';
import * as S from '@/components/common/Button/SelectButton/selectButton.style';

interface ButtonProps {
  isSelected?: boolean;
  onClick?: () => void;
  children: string;
}

const SelectedButton: React.FC<ButtonProps> = ({
  isSelected,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <S.StyledButton isSelected={isSelected} onClick={handleClick}>
      {children}
    </S.StyledButton>
  );
};

export default SelectedButton;
