import { useState } from "react";
import "./App.css";
import TodoWriteForm from "./components/TodoWriteForm";
import TodoList from "./components/TodoList";

// const getTodoList = async () => {
//     try {
//         const response = await fetch("https://dummyjson.com/todos");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         return data.todos; // Assuming the todos are in a 'todos' field
//     } catch (error) {
//         console.error("Failed to fetch todo list:", error);
//         return [];
//     }
// };

const App = () => {
    // const [todos, setTodos] = useState([]); // 초기 todos 배열 설정
    const [todos, setTodos] = useState([
        { id: 3, completed: false, todo: "공부하기" },
        { id: 2, completed: false, todo: "운동하기" },
        { id: 1, completed: true, todo: "청소하기" },
    ]);

    // useEffect(() => {
    //     const fetchTodos = async () => {
    //         const initialTodos = await getTodoList();
    //         // 초기 ID를 설정하기 위해 가장 큰 ID 값을 찾음
    //         // const maxId = initialTodos.reduce((max, todo) => Math.max(max, todo.id), 0);
    //         // setTodoId(maxId + 1); // 다음 ID를 설정
    //         setTodos(initialTodos); // 초기 todos 설정
    //     };
    //     fetchTodos();
    // }, []);

    return (
        <>
            <h1 className="text-3xl font-bold">Todo List</h1>
            <TodoWriteForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
};

export default App;
