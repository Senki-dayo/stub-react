// import React from "react";
import Stub from "./Stub";

export default function App() {
  // スタブコンポーネントからデータセットを取得
  const dataSets = Stub();

  // データセットをタグの形に整形
  const dataSetElements = dataSets.map((dataSet, index) => (
    <div key={index}>
      <h1>{dataSet.title}</h1>
      <p>{dataSet.content}</p>
    </div>
  ));

  return (
    <div>
      <h1>アプリケーション</h1>
      {dataSetElements}
    </div>
  );
}
