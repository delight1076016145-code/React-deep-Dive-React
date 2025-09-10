import { memo } from "react";
import { TodoListItemType } from "./App";

type PropsType = {
  todoListItem: TodoListItemType;
  deleteTodo: (id: number) => void;
};

const TodoListItem = memo(({ todoListItem, deleteTodo }: PropsType) => {
  console.log("## TodoListItem");
  return (
    <li>
      <span>{todoListItem.todo}</span>
      <span style={{ cursor: "pointer", color: "blue" }} onClick={() => deleteTodo(todoListItem.id)}>
        삭제
      </span>
    </li>
  );
});

export default TodoListItem;
