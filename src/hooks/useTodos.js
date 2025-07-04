import { useRef } from "react";

const useTodos = ({ todos, setTodos }) => {
    const todoId = useRef(4); // 초기 ID 설정, useRef를 사용하여 상태 관리

    const addTodo = (text) => {
        setTodos([
            { todo: text, completed: false, id: todoId.current },
            ...todos,
        ]);
        todoId.current++;
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id, completed) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !completed } : todo
            )
        );
    };

    const modifyTodo = (id, text) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: text } : todo
            )
        );
    };

    return { todos, addTodo, removeTodo, toggleTodo, modifyTodo };
};

export default useTodos;
