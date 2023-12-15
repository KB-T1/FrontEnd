import styled from "styled-components";
import { P2 } from "./Text";
import back from "../assets/back.png";
import esc from "../assets/esc.png";

interface NavbarProps {
  type: "back" | "esc";
  children: React.ReactNode;
}

export function Navbar({ type, children }: NavbarProps) {
  return (
    <NavbarContainer>
      <NavbarChild>
        {type === "back" ? <img src={back}></img> : <div></div>}
      </NavbarChild>
      <NavbarChild>
        <P2>{children}</P2>
      </NavbarChild>
      <NavbarChild>
        {type === "esc" ? <img src={esc}></img> : <div></div>}
      </NavbarChild>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 28px;
`;

const NavbarChild = styled.div`
  & > div {
    width: 28px;
    height: 100%;
  }
`;
