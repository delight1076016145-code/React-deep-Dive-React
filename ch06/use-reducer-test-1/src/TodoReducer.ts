export type TodoItemType = {
  id: number;
  todo: string;
};

export type TodoActionType = ReturnType<typeof TodoActionCreator.addTodo> | ReturnType<typeof TodoActionCreator.deleteTodo>;

export const TodoActionCreator = {
  addTodo: (todo: string) => ({ type: "addTodo" as const, payload: { todo } }),
  deleteTodo: (id: number) => ({ type: "deleteTodo" as const, payload: { id } }),
};

const TodoReducer = (todoList: TodoItemType[], action: TodoActionType) => {
  let newTodoList;
  switch (action.type) {
    case "addTodo":
      newTodoList = [...todoList, { id: new Date().getTime(), todo: action.payload.todo }];

      return newTodoList;
    case "deleteTodo":
      newTodoList = todoList.filter((item) => item.id !== action.payload.id);

      return newTodoList;
    default:
      return todoList;
  }
};

export default TodoReducer;
