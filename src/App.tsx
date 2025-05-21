import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [fishCount, setFishCount] = useState<number>(0);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput.trim()]); // 新しいタスクを追加
      setFishCount(fishCount + 1); // 魚の数を増やす
      setTaskInput(""); // 入力欄をクリア
    } else {
      alert("お魚の誕生！");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="container">
      <h1>おさかなToDoリスト</h1>

      <div className="todo-input-area">
        <input
          type="text"
          id="taskInput"
          placeholder="新しいタスクを入力..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button id="addTaskButton" onClick={addTask}>
          タスクを追加
        </button>
      </div>

      <div className="todo-list-area">
        <h2>今日のタスク</h2>
        <ul id="taskList">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li> // 各タスクにユニークなkeyを設定
          ))}
        </ul>
      </div>

      <div className="fish-tank-area">
        <h2>私の魚たち</h2>
        <div id="fishTank">
          {Array.from({ length: fishCount }).map((_, index) => (
            <div key={index} className="fish"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
