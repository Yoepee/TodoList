import { useRef, useState } from "react";
import "./App.css";

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
    const todoId = useRef(4); // 초기 ID 설정, useRef를 사용하여 상태 관리
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
        <>
            <h1 className="text-3xl font-bold">Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input name="todo" className="border" />
                <button type="submit" className="border">
                    등록
                </button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={removeTodo} onToggle={toggleTodo} />
                ))}
            </ul>
        </>
    );
};

export default App;
