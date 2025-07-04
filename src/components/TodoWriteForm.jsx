import React from "react";

const TodoWriteForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e.target.elements.todo.value);
        e.target.elements.todo.value = ""; // 입력 필드 초기화
        e.target.elements.todo.focus(); // 입력 필드에 포커스 유지
    };

    const addTodo = (text) => {
        setTodos([{ todo: text, completed: false, id: todoId.current }, ...todos]);
        todoId.current++;
        // fetch("https://dummyjson.com/todos/add", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         todo: text,
        //         completed: false,
        //         userId: todoId.current,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((todo) => {
        //         setTodos([todo, ...todos]);
        //         todoId.current = todoId + 1;
        //     });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="todo" className="border" />
            <button type="submit" className="border">
                등록
            </button>
        </form>
    );
};

export default TodoWriteForm;
