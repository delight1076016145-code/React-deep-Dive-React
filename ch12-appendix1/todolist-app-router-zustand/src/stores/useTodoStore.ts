import { produce } from "immer";
import { create, StateCreator, StoreApi } from "zustand";

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

type TodoStoreType = {
  todoList: TodoItemType[];
};

type TodoActionsType = {
  addTodo: ({ todo, desc }: { todo: string; desc: string }) => void;
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
  updateTodo: ({ id, todo, desc, done }: TodoItemType) => void;
};

// 커스텀 logger 미들웨어
const customLogger =
  <T>(config: StateCreator<T>) =>
  (set: StoreApi<T>["setState"], _get: StoreApi<T>["getState"], api: StoreApi<T>) =>
    config(
      (args) => {
        console.log("[미들웨어] 액션 실행", args);
        set(args);
        console.log("[미들웨어] 변경된 상태", api.getState());
      },
      _get,
      api
    );

const useTodoStore = create<TodoStoreType & TodoActionsType>(
  customLogger<TodoStoreType & TodoActionsType>((set) => ({
    todoList: [
      { id: 1, todo: "ES6학습", desc: "설명1", done: false },
      { id: 2, todo: "React학습", desc: "설명2", done: false },
      { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
      { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
    ],
    addTodo: ({ todo, desc }: { todo: string; desc: string }) => {
      set((state: TodoStoreType) => {
        const newTodoList = produce(state.todoList, (draft: TodoItemType[]) => {
          draft.push({
            id: new Date().getTime(),
            todo,
            desc,
            done: false,
          });
        });
        return { todoList: newTodoList };
      });
    },
    deleteTodo: (id: number) => {
      set((state: TodoStoreType) => {
        const newTodoList = state.todoList.filter((item: TodoItemType) => item.id !== id);
        return { todoList: newTodoList };
      });
    },
    toggleDone: (id: number) => {
      set((state: TodoStoreType) => {
        const index = state.todoList.findIndex((item: TodoItemType) => item.id === id);
        const newTodoList = produce(state.todoList, (draft: TodoItemType[]) => {
          draft[index].done = !draft[index].done;
        });
        return { todoList: newTodoList };
      });
    },
    updateTodo: ({ id, todo, desc, done }: TodoItemType) => {
      set((state: TodoStoreType) => {
        const index = state.todoList.findIndex((item: TodoItemType) => item.id === id);
        const newTodoList = produce(state.todoList, (draft: TodoItemType[]) => {
          draft[index] = { id, todo, desc, done };
        });
        return { todoList: newTodoList };
      });
    },
  }))
);

export default useTodoStore;
