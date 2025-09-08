import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import { ItodoItem } from "../AppContainer";

type PropsType = {
  todoList: ItodoItem[];
  addTodo: (todo: string) => void;
  deleteTodo: (no: number) => void;
  toggleDone: (no: number) => void;
};

const App = ({ todoList, addTodo, deleteTodo, toggleDone }: PropsType) => {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">:: Todolist App</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          <InputTodo addTodo={addTodo} />
          <TodoList todoList={todoList} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
