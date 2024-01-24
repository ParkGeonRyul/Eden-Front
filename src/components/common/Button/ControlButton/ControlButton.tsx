import * as S from '@/components/common/Button/ControlButton/controlButton.style';

interface ButtonProps {
  type: 'edit' | 'delete' | 'editComplete' | 'cancel';
  onClick?: () => void;
}

const ControlButton: React.FC<ButtonProps> = ({ type, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  let buttonText = '';

  switch (type) {
    case 'edit':
      buttonText = '수정';
      break;
    case 'delete':
      buttonText = '삭제';
      break;
    case 'editComplete':
      buttonText = '수정완료';
      break;
    case 'cancel':
      buttonText = '취소';
      break;
    default:
      break;
  }

  return (
    <S.StyledButton type={type} onClick={handleClick}>
      {buttonText}
    </S.StyledButton>
  );
};

export default ControlButton;
