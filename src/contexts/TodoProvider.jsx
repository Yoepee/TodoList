import { useState } from "react";
import { TodoContext } from "./TodoContext";
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 3, completed: false, todo: "공부하기" },
        { id: 2, completed: false, todo: "운동하기" },
        { id: 1, completed: true, todo: "청소하기" },
    ]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};
