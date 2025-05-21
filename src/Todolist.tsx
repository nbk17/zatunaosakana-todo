import React from "react";

const TodoList = ({ todos }) => {
    return(
        todos.map (todo=>{
            return(
                <div key={todo.id}>
                    <label>
                        <input type="checkbox"/>
                        {todo.name}
                    </label>
                </div>
            )
        })
    )
}

export default TodoList;