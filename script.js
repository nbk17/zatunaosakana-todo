//document.addEventListener("DOMContentLoaded", () => {
//  const taskInput = document.getElementById("taskInput");
//  const addTaskButton = document.getElementById("addTaskButton");
//  const taskList = document.getElementById("taskList");
//  const fishTank = document.getElementById("fishTank");
//
//  addTaskButton.addEventListener("click", addTask);
//  taskInput.addEventListener("keypress", (e) => {
//    if (e.key === "Enter") {
//      addTask();
//    }
//  });

//  function addTask() {
//    const taskText = taskInput.value.trim();
//
//    if (taskText !== "") {
//      // 1. タスクをリストに追加
//      const listItem = document.createElement("li");
//      listItem.textContent = taskText;
//      taskList.appendChild(listItem);
//
//      // 2. 魚を水槽に追加
//      addFish();
//
//      // 入力欄をクリア
//      taskInput.value = "";
//    } else {
//      alert("タスクを入力してください！");
//    }
//  }
//
//  function addFish() {
//    const fishDiv = document.createElement("div");
//    fishDiv.classList.add("fish");
//    fishTank.appendChild(fishDiv);
//  }
//
//  // （オプション）初期表示として魚をいくつか追加してみる
//  // for (let i = 0; i < 3; i++) {
//  //     addFish();
//  // }
//});
