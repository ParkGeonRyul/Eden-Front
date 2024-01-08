import * as S from '@/components/common/Label/label.style';

interface ButtonProps {
  type: 'hold' | 'done';
}

const Label: React.FC<ButtonProps> = ({ type }) => {
  return (
    <S.StyledButton type={type}>
      {type === 'hold' ? '답변대기' : '답변완료'}
    </S.StyledButton>
  );
};

export default Label;
