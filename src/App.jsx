import "./App.css";
import TodoWriteForm from "./components/TodoWriteForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoProvider";

export const App = () => {
    return (
        <>
            <h1 className="text-3xl font-bold">Todo List</h1>
            <TodoWriteForm />
            <TodoList />
        </>
    );
};
