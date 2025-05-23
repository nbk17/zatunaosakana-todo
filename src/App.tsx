import './App.css'
import TodoList from './components/Todolist'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

function App(){
  //タスク状態の管理
  const [todos,setTodos] = useState([
    //{id: 1, name: 'todo1', completed:false}
  ])

  const [inputValue, setInputValue] = useState('')

  const [isComposing, setIsComposing] = useState(false)

  const handleInputValue = (e) =>{
    setInputValue(e.target.value)
  }

  //task追加
  const handleAddTodo = () =>{
    if(inputValue === '')return
    setTodos((prevTodos)=>{
      return[...prevTodos,{id:uuidv4(), name:inputValue, completed:false}]
    })
    setInputValue('')
  }

  const handlekeyDown = (event) => {
    if (event.key === 'Enter' && !isComposing) {
      handleAddTodo()
    }
  }

  //todo追加
  const todoCompleted = (id) =>{
    const newTodos = [...todos]
    const checkedTodo = newTodos.find((newTodo)=> newTodo.id === id)
    checkedTodo.completed = !checkedTodo.completed
    setTodos(newTodos)
  }

  //todo削除
  const handleClear=()=>{
    setTodos(todos.filter(todo=> !todo.completed))
  }
  return(
    <>
    <div className='contents'>
      <p>残りのおさかな：{todos.filter(todo => !todo.completed).length} </p>
        <input
          value={inputValue}
          onChange={handleInputValue}
          onKeyDown={handlekeyDown}
          onCompositionEnd={() => setIsComposing(false)}
        />
      <button onClick={handleAddTodo}>おさかなをふやす</button>
      <button onClick={handleClear}>おさかなをたべる</button>
      <div className='aquarium'>
        <div className='fish'>
          <TodoList todos={todos} todoCompleted={todoCompleted} />
        </div>
      </div>
      
    </div>
    </>
  )
}
export default App;
