import ListDetailPage from '@/components/ListDetail/UI/ListDetailPage';
import { ListItemDetail } from '@/types/apis/listItem';

interface ListDetailProps {
  params: {
    slug: string;
    id: string;
  };
}

const getListDetail = async () => {
  const listDetailData = await fetch(
    'http://localhost:3000/mock/listDetails.json',
  );
  const result = await listDetailData.json();
  return result.data;
};

export default async function ListDetail({ params }: ListDetailProps) {
  const listItemDetail: ListItemDetail = await getListDetail();
  const isAdmin = true; //TODO: 유저 관련 fetch로 변경

  const deletePost = async () => {
    'use server';
    //TODO 게시글 삭제 로직 추가
    console.log(`${params.slug}의 ${listItemDetail.postId} 게시글 삭제`);
  };

  return (
    <ListDetailPage
      listItemDetail={listItemDetail}
      isAdmin={isAdmin}
      slug={params.slug}
      deletePost={deletePost}
    />
  );
}
