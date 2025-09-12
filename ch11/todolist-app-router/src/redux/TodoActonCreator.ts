import { createAction } from "@reduxjs/toolkit";

export const TODO_ACTION = {
  ADD_TODO: "addTodo" as const,
  DELETE_TODO: "deleteTodo" as const,
  TOGGLE_DONE: "toggleDone" as const,
  UPDATE_TODO: "updateTodo" as const,
};

const TodoActonCreator = {
  // addTodo: (todoItem: { todo: string; desc: string }) => {
  //   return { type: TODO_ACTION.ADD_TODO, payload: todoItem };
  // },
  addTodo: createAction<{ todo: string; desc: string }>("addTodo"),
  // deleteTodo: (todoItem: { id: number }) => {
  //   return { type: TODO_ACTION.DELETE_TODO, payload: todoItem };
  // },
  deleteTodo: createAction<{ id: number }>("deleteTodod"),
  // toggleDone: (todoItem: { id: number }) => {
  //   return { type: TODO_ACTION.TOGGLE_DONE, payload: todoItem };
  // },
  toggleDone: createAction<{ id: number }>("toggleDone"),
  // updateTodo: (todoItem: { id: number; todo: string; desc: string; done: boolean }) => {
  //   return { type: TODO_ACTION.UPDATE_TODO, payload: todoItem };
  // },
  updateTodo: createAction<{ id: number; todo: string; desc: string; done: boolean }>("deleteTodo"),
};

// export type TodoActionType =
//   | ReturnType<typeof TodoActonCreator.addTodo>
//   | ReturnType<typeof TodoActonCreator.deleteTodo>
//   | ReturnType<typeof TodoActonCreator.toggleDone>
//   | ReturnType<typeof TodoActonCreator.updateTodo>;

export default TodoActonCreator;
