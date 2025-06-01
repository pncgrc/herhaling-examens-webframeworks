import {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

interface TodoItem { 
    name: string;
    completed: boolean;
}

const App = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", width: "100vw" }}>
            <TodoInput addTodo={addTodo}/>
            <TodoList todos={todos} markCompleted={markCompleted}/>
        </div>
    );

}

export default App;