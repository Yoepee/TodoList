import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <li className="text-2xl">
            <input
                type="checkbox"
                className="mr-2"
                checked={todo.completed}
                onClick={() => {
                    onToggle(todo.id, todo.completed);
                }}
                readOnly
            />
            <span onClick={() => onToggle(todo.id, todo.completed)} className="cursor-pointer">
                {todo.id}.{todo.todo} / checked: {JSON.stringify(todo.completed)}
            </span>
            <button onClick={() => onDelete(todo.id)} className="ml-2 text-red-500">
                X
            </button>
        </li>
    );
};

const TodoList = ({ todos, setTodos }) => {
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        // fetch(`https://dummyjson.com/todos/${id}`, {
        //     method: "DELETE",
        // })
        //     .then((res) => res.json())
        //     .then((todo) => {
        //         setTodos(todos.filter((item) => item.id !== todo.id));
        //     });
    };

    const toggleTodo = (id, completed) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !completed } : todo)));
        // fetch(`https://dummyjson.com/todos/${id}`, {
        //     method: "PUT" /* or PATCH */,
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         completed: !completed,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((todo) => {
        //         setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
        //     });
    };

    return (
        <ul>
            {todos.length &&
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete={removeTodo} onToggle={toggleTodo} />)}
        </ul>
    );
};

export default TodoList;
