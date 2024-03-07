import * as S from '@/app/mypage/info.style';
import SideNav from './_components/SideNav/Sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Mypage>
      <SideNav />
      <>{children}</>
    </S.Mypage>
  );
}
