import React from "react";

const TodoList = ({todos,todoCompleted}) =>{
    return(
        todos.map(todo => {
            const handleTodoClick=()=>{
                todoCompleted(todo.id)
            }
            
            return(
                <div key={todo.id}>
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