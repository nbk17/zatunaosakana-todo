import React from "react";
import RandomImage from './RandomImage.tsx'


const TodoList = ({todos,todoCompleted}) =>{
    return(
        todos.map(todo => {
            const handleTodoClick=()=>{
                todoCompleted(todo.id)
            }
            
            return(
                <div key={todo.id}>
                    <RandomImage />
                    <label>
                        <input type="checkbox"
                        checked={todo.completed}
                        onChange={handleTodoClick}
                        />
                        {todo.name}
                    </label>
                </div>
            )
        })
    )
}

export default TodoList;