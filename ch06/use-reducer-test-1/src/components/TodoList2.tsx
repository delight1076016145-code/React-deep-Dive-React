import { useReducer, useState } from "react";
import TodoReducer, { TodoActionCreator, TodoItemType } from "../TodoReducer";

const initialTodoList2: TodoItemType[] = [
  { id: 1, todo: "운동2" },
  { id: 2, todo: "독서2" },
  { id: 3, todo: "음악감상3" },
];

const TodoList2 = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, dispatchTodoList] = useReducer(TodoReducer, initialTodoList2);

  const addTodo = () => {
    dispatchTodoList(TodoActionCreator.addTodo(todo));
    setTodo("");
  };
  const deleteTodo = (id: number) => {
    dispatchTodoList(TodoActionCreator.deleteTodo(id));
  };

  return (
    <div style={{ margin: "10px", padding: "10px", border: "solid 1px gray" }}>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button onClick={addTodo}>할일 추가</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo} &nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList2;
