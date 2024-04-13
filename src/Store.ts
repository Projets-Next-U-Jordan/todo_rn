import React from "react";
import { TodoItem } from "./data/TodoItem";

type TodoListContextType = {
    todos: TodoItem[];
    setTodos: (todos: TodoItem[]) => void;
};

export const TodoListContext = React.createContext({} as TodoListContextType);
