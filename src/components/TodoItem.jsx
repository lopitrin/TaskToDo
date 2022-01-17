import React from 'react';

export function TodoItem({todo, toggleTodo}) {
    const handleTodoClick = () =>{
        toggleTodo(id);
    }
    const {id,task,completed} = todo
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
            {task}
        </li>
    )
}
