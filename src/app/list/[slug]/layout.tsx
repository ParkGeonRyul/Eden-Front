'use client';
import type { Metadata } from 'next';
import Mainpage from '@/components/MainPage/MainPage';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Mainpage>{children}</Mainpage>;
};

export default Layout;