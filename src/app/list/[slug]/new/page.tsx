import FormPageContainer from '@/app/list/[slug]/_components/Formpage/Container/FormPageContainer';
import { ListProps } from '@/interfaces/listPage';

export default function PostsPage({ params }: ListProps) {
  return <FormPageContainer type="post" params={params}></FormPageContainer>;
}
