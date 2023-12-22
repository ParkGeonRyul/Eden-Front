import { ReactElement, ReactNode } from 'react';
import * as S from './style';

interface Props {
  label: string | ReactNode;
  to: string;
}

const LinkButton = ({ label, to }: Props): ReactElement => {
  return <S.StyledLink href={to}>{label}</S.StyledLink>;
};

export default LinkButton;
