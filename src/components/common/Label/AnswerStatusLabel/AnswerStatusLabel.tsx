import { StyledLabel } from '@/components/common/Label/AnswerStatusLabel/answerStatusLabel.style';

interface LabelProps {
  type: 'hold' | 'done';
  children: string;
}

const AnswerStatusLabel: React.FC<LabelProps> = ({ type, children }) => {
  return <StyledLabel type={type}>{children}</StyledLabel>;
};

export default AnswerStatusLabel;
