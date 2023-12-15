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
import { H1, H2, H3, P1, P2, P3, P4, Comment } from "./commons/Text";
import { ButtonGray, ButtonYellow } from "./commons/Button";
import { Tabbar } from "./commons/Tabbar";

function App() {
  return (
    <RecoilRoot>
      <div className="root">
        hello world
        <H1>H1입니다</H1>
        <H2>H2입니다</H2>
        <H3>H3입니다</H3>
        <P1>P1입니다</P1>
        <P2>P2입니다</P2>
        <P3>P3입니다</P3>
        <P4>P4입니다</P4>
        <Comment>주석입니다</Comment>
        <ButtonGray>버튼</ButtonGray>
        <ButtonYellow>버튼</ButtonYellow>
        <Tabbar />
      </div>
    </RecoilRoot>
  );
}

export default App;
