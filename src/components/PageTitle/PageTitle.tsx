import { ReactNode } from 'react';
import * as S from './pageTitle.style';

const PageTitle = ({ children }: { children: ReactNode }) => {
  return <S.PageTitle>{children}</S.PageTitle>;
};

export default PageTitle;
