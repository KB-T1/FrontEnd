import { useRecoilState } from "recoil";
import styled from "styled-components";
import { barState } from "../states/userState";

import { Comment2 } from "./Text";

export function Tabbar() {
  const [tabbarState, setTabbarState] = useRecoilState(barState);

  const handleClick = (type: string) => {
    setTabbarState(type);
  };

  return (
    <TabbarContainer>
      <TabButton
        onClick={() => {
          handleClick("home");
        }}
        state={tabbarState}
        type="home"
      >
        <Comment2>홈</Comment2>
      </TabButton>
      <TabButton
        onClick={() => {
          handleClick("video");
        }}
        state={tabbarState}
        type="video"
      >
        <Comment2>보관함</Comment2>
      </TabButton>
    </TabbarContainer>
  );
}

const TabbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;

  width: 393px;
  height: 62px;
  border-top: 1px solid var(--gray4, #bababa);
`;

const TabButton = styled.button<{
  onClick?: any;
  state?: string;
  type?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  padding: 0;
  height: 100%;
  border: 0;

  color: ${(props) => (props.state === props.type ? "#FFDA49" : "#666560")};

  background-image: ${(props) =>
    props.type === "home"
      ? props.state === "home"
        ? "url('../assets/homeSelected.png');"
        : "url('../assets/homeDefault.png');"
      : props.state === "video"
      ? "url('../assets/videoSelected.png');"
      : "url('../assets/videoDefault.png');"};

  background-position: center 10px;
  background-size: 24px;
  background-repeat: no-repeat;

  & > p {
    position: relative;
    top: 12px;
  }
`;
