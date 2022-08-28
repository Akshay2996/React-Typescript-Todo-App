import React from "react";
import { Todo } from "../model";
import { Actions } from "../TodoReducer";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;
