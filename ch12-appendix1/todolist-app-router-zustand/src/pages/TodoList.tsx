import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import useTodoStore from "../stores/useTodoStore";

const TodoList = () => {
  const todoList = useTodoStore((state) => state.todoList);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleDone = useTodoStore((state) => state.toggleDone);

  const todoItems = todoList.map((item) => (
    <li className="list-group-item" key={item.id}>
      <TodoItem todoItem={item} deleteTodo={({ id }) => deleteTodo(id)} toggleDone={({ id }) => toggleDone(id)} />
    </li>
  ));
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
