import React from "react";
import RandomImage from './RandomImage.tsx'
import './Todolist.css'


const TodoList = ({todos,todoCompleted}) =>{
    return(
        todos.map(todo => {
            const handleTodoClick=()=>{
                todoCompleted(todo.id)
            }
            
            return(
                <div key={todo.id}>
                    <label className='listcontent'>
                        <input type="checkbox"
                        checked={todo.completed}
                        onChange={handleTodoClick}
                        />
                        <div className="img">
                            <RandomImage />
                        </div>
                        
                        {todo.name}
                    </label>
                </div>
            )
        })
    )
}

export default TodoList;