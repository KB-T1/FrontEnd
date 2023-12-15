import React from "react";
import { H1, H2, H3, P1, P2, P3, P4, Comment } from "../../commons/Text";
import { ButtonGray, ButtonYellow } from "../../commons/Button";
import { Tabbar } from "../../commons/Tabbar";
import { Navbar } from "../../commons/Navbar";
import { NotifyBar } from "../../commons/NotifyBar";

export default function Index() {
  return (
    <>
      <Navbar type="back">네비게이션 바</Navbar>
      <NotifyBar>새로운 마음이 도착했어요!</NotifyBar>
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
    </>
  );
}
