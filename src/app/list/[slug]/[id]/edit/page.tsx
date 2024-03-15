import FormPageContainer from '@/app/list/[slug]/_components/Formpage/Container/FormPageContainer';
import { ListProps } from '@/interfaces/listPage';
import { ListItemDetail } from '@/types/apis/listItem';

const getFormData = async () => {
  //TODO react-query로 변경 및 api 분리
  const formData = await fetch('http://localhost:3000/mock/listDetail.json');
  const result = await formData.json();
  return result.data;
};

export default async function Editpage({ params }: ListProps) {
  const formData: ListItemDetail = await getFormData();

  return (
    <FormPageContainer
      type="edit"
      initialFormData={formData}
      params={params}></FormPageContainer>
  );
}
