interface TodoItem { 
    name: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: TodoItem;
    markCompleted: (value: boolean) => void;
}


const TodoItem = ({todo, markCompleted}: TodoItemProps) => {

    return(
        <div>
            <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(event.target.checked)}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
        </div>
    );
}

export default TodoItem;