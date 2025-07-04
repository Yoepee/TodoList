import { useTodoContext } from "../hooks/useTodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos } = useTodoContext(); // 커스텀 훅을 사용하여 todos 상태 관리
    return (
        <ul>
            {todos.length &&
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    );
};

export default TodoList;
