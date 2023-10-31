import "./styles.css";
import React from "react";
import StubData from "./StubData";

export default function StubView() {
  // スタブコンポーネントからデータセットを取得
  const dataSets = StubData();

  // データセットをタグの形に整形
  const dataSetElements = dataSets.map((dataSet, index) => (
    <div key={index}>
      <h1>{dataSet.title}</h1>
      <p>{dataSet.content}</p>
    </div>
  ));

  return (
    <div className="App">
      <h2>Stubから取得した情報の一覧表示</h2>
      {dataSetElements}
    </div>
  );
}
