import { ReactNode } from 'react';
import * as S from './mainPage.style';

const Mainpage = ({ children }: { children: ReactNode }) => {
  return <S.Page>{children}</S.Page>;
};

export default Mainpage;
