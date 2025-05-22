// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //新しく.tsxファイルを追加した場合は<App />の下から記述してください
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
