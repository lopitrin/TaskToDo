import React, {Fragment, useState} from "react";
import { TodoList } from "./components/TodoList";

export function App(){
    const [todos, setTodos] = useState([
        {id: 1 , task: 'Tarea1', completed: false},
    ]);

    return (
    <Fragment>
        <TodoList todos = {todos} />
        <input type="text" placeholder="Nueva Tarea"/>
        <button>📝</button>
        <button>🗑</button>
    </Fragment>
    );
}