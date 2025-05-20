import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <todoList todos={todos} />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク: {todos.length}</div>
    </div>
  );
}

export default App;