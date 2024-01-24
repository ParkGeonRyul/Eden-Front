import * as S from '@/components/common/Button/AuthButton/authButton.style';

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const AuthButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <S.StyledButton onClick={handleClick}>{children}</S.StyledButton>;
};

export default AuthButton;
