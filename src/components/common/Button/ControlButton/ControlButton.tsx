import * as S from '@/components/common/Button/ControlButton/controlButton.style';

interface ButtonProps {
  type: 'edit' | 'delete';
}

const ControlButton: React.FC<ButtonProps> = ({ type }) => {
  return (
    <S.StyledButton type={type}>
      {type === 'edit' ? '수정' : '삭제'}
    </S.StyledButton>
  );
};

export default ControlButton;
