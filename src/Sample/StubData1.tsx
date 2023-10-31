import React from "react";

export default function StubData() {
  const dataSets = [
    {
      group: "group1",
      name: "name1",
      callTimeTotal: "callTimeTotal1",
      callCountTotal: "callCountTotal1",
    },
    {
      group: "group2",
      name: "name2",
      callTimeTotal: "callTimeTotal2",
      callCountTotal: "callCountTotal2",
    },
  ];

  // データセットを配列として返す
  return dataSets;
}
