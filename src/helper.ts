export interface ModalWindowProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
type TodoList = {
  id: number;
  title: string;
  description: string;
  status: boolean;
};
export interface initialStateProps {
  todoList: Array<TodoList>;
  todo: Array<TodoList>;
}
