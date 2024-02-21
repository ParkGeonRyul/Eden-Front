import Mainpage from '@/components/common/MainPage/MainPage';

interface Props {
  children: React.ReactNode;
}

interface ListPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ListPageProps) {
  return {
    title: `${params.slug} list`,
  };
}

const Layout = ({ children }: Props) => {
  return <Mainpage>{children}</Mainpage>;
};

export default Layout;
