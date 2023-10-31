import React from "react";
import ReactDOM from "react-dom/client";
import StubView from "./StubView";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <p>stubの読み込みを行うReactコンポーネント</p>
    <p>動作テスト</p>
    <StubView />
  </React.StrictMode>,
);
