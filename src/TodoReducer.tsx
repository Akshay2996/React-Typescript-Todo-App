import { Todo } from "./model";

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number }
  | { type: "update"; payload: { id: number; text: string } };

export function TodoReducer(todos: Todo[], action: Actions) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    case "remove":
      return todos.filter((todo) => todo.id !== action.payload);

    case "done":
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "update":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.text }
          : todo
      );
  }
}
