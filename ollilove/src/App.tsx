import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="root">hello world</div>
    </RecoilRoot>
  );
}

export default App;
