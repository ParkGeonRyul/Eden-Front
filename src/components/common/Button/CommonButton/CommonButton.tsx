import * as S from '@/components/common/Button/CommonButton/commonButton.style';

interface ButtonProps {
  type: 'primary' | 'secondary';
  wide?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children: string;
}

const CommonButton: React.FC<ButtonProps> = ({
  type,
  wide,
  isActive = true,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <S.StyledButton
      type={type}
      wide={wide}
      isActive={isActive}
      onClick={handleClick}>
      {children}
    </S.StyledButton>
  );
};

export default CommonButton;
