import TodoItem from "./TodoItem";

interface TodoItemSingle { 
    name: string;
    completed: boolean;
}

interface TodoListProps {
    todos: TodoItemSingle[];
    markCompleted: (i: number, value: boolean) => void;
}

const TodoList = ({todos, markCompleted}: TodoListProps) => {

    return(
        <div>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} markCompleted={(completed: boolean) => markCompleted(index, completed)}/>
            ))}
        </div>
    );
}

export default TodoList;