import React from "react";
import ReactDOM from "react-dom/client";
// React 요소
const app = React.createElement(
  "div",
  { className: "app" },
  "React App 매뉴얼 구성"
);
// DOM 노드
const rootNode = ReactDOM.createRoot(document.getElementById("app"));
// DOM 노드에 React 요소 렌더링
rootNode.render(app);
