import { useTodoContext } from "../hooks/useTodoContext";
import useTodos from "../hooks/useTodos";

const TodoWriteForm = () => {
    const { todos, setTodos } = useTodoContext();
    const { addTodo } = useTodos({ todos, setTodos });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e.target.elements.todo.value);
        e.target.elements.todo.value = ""; // 입력 필드 초기화
        e.target.elements.todo.focus(); // 입력 필드에 포커스 유지
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
