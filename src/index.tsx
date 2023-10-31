import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <p>stubの読み込みを行うReactコンポーネント</p>
    <p>動作テスト</p>
    <App />
  </React.StrictMode>,
);
