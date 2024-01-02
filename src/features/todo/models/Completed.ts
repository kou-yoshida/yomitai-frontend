/**
 * 完了前のTodo
 */
export type Completed = {
  id: number;
  title: string;
  completed: true;
  imageUrl: string;
  externalUrl: string;
  memo: string;
};
