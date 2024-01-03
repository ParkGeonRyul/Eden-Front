import * as S from '@/components/common/Button/AuthButton/authButton.style';

interface ButtonProps {
  children: string;
}

const AuthButton: React.FC<ButtonProps> = ({ children }) => {
  return <S.StyledButton>{children}</S.StyledButton>;
};

export default AuthButton;
