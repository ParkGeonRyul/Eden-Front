import * as S from '@/components/common/Button/ControlButton/controlButton.style';

interface ButtonProps {
  type: 'edit' | 'delete';
  children: string;
}

const ControlButton: React.FC<ButtonProps> = ({ type, children }) => {
  return <S.StyledButton type={type}>{children}</S.StyledButton>;
};

export default ControlButton;
