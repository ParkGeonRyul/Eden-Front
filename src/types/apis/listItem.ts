export interface ListItem {
  postId: number;
  title: string;
  date: string;
}

export interface ListItemDetail extends Omit<ListItem, 'postId'> {
  content: string;
}
