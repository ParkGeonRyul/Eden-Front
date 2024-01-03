import * as S from '@/components/common/Button/CommonButton/commonButton.style';

interface ButtonProps {
  type: 'primary' | 'secondary';
  wide?: boolean;
  isActive?: boolean;
  children: string;
}

const CommonButton: React.FC<ButtonProps> = ({
  type,
  wide,
  isActive,
  children,
}) => {
  return (
    <S.StyledButton type={type} wide={wide} isActive={isActive}>
      {children}
    </S.StyledButton>
  );
};

export default CommonButton;
