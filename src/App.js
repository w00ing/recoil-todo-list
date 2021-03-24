import React from "react";
import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
