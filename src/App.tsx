import { useState } from "react";
import './App.css';
import TodoList from './Todolist.tsx'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name: 'todo1', completed: false}
  ])
  //const [tasks, setTasks] = useState<string[]>([]);
  //const [taskInput, setTaskInput] = useState<string>("");
  //const [fishCount, setFishCount] = useState<number>(0);

  //const addTask = () => {
  //  if (taskInput.trim() !== "") {
  //    setTasks([...tasks, taskInput.trim()]); // 新しいタスクを追加
  //    setFishCount(fishCount + 1); // 魚の数を増やす
  //    setTaskInput(""); // 入力欄をクリア
  //  } else {
  //    alert("タスクを入力してください！");
  //  }
  //};

  //const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //  if (e.key === "Enter") {
  //    addTask();
  //  }
  //};

  return (
    <div>
      <h1>おさかなToDoリスト</h1>
      <p>残りのおさかな：0</p>
      <input />
      <button>おさかなを増やす</button>
      <button>おさかなを食べる</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
