import React from "react";
import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";

import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
