import React, { useState, createContext } from "react";
import Todo from "../models/todo";

interface TodosContextType {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prev) => prev.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
