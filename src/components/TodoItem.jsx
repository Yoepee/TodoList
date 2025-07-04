import useBoolean from "../hooks/useBoolean";
import { useTodoContext } from "../hooks/useTodoContext";
import useTodos from "../hooks/useTodos";

const TodoItem = ({ todo }) => {
    const { todos, setTodos } = useTodoContext();
    const { removeTodo, toggleTodo, modifyTodo } = useTodos({
        todos,
        setTodos,
    }); // 커스텀 훅을 사용하여 todos 상태 관리
    const { value: modifyMode, toggle: toggleModifyMode } = useBoolean();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newText = e.target.elements.todo.value;
        if (newText.trim()) {
            todo.todo = newText; // 직접 수정
            modifyTodo(todo.id, newText); // 수정된 텍스트로 todo 업데이트
            toggleModifyMode(); // 수정 모드 종료
        }
    };

    return (
        <li className="text-2xl relative">
            <input
                type="checkbox"
                className="mr-2"
                checked={todo.completed}
                onClick={() => {
                    toggleTodo(todo.id, todo.completed);
                }}
                readOnly
            />
            <span
                onClick={() => toggleTodo(todo.id, todo.completed)}
                className="cursor-pointer"
            >
                {todo.id}.{todo.todo} / checked:{" "}
                {JSON.stringify(todo.completed)}
            </span>
            <button
                onClick={() => toggleModifyMode()}
                className="ml-2 border bg-gray-300"
            >
                수정
            </button>
            <button
                onClick={() => removeTodo(todo.id)}
                className="ml-2 border bg-gray-300"
            >
                삭제
            </button>
            <div
                className="w-full h-full bg-gray-100 z-10"
                style={{ display: modifyMode ? "block" : "none" }}
            >
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        name="todo"
                        className="border"
                        defaultValue={todo.todo}
                    />
                    <button type="submit" className="border">
                        저장
                    </button>
                </form>
            </div>
        </li>
    );
};

export default TodoItem;
