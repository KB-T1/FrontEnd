import React from "react";
import styled from "styled-components";
import { NotifyBar } from "../../commons/NotifyBar";
import { Tabbar } from "../../commons/Tabbar";
import { H3 } from "../../commons/Text";
import { RecentBtn } from "../../components/VideoRecorder/RecentBtn";
import { TransferBtn } from "../../components/VideoRecorder/TransferBtn";

export default function Home() {
  const tmpMembers = [
    {
      profile: "라무",
      name: "이수민",
      relationship: "따님",
    },
    {
      profile: "라무",
      name: "이수민",
      relationship: "따님",
    },
    {
      profile: "라무",
      name: "이수민",
      relationship: "따님",
    },
    {
      profile: "라무",
      name: "이수민",
      relationship: "따님",
    },
  ];
  const tmpLists = [
    {
      profile: "비비",
      name: "김옥순",
      relationship: "엄마",
      amount: 500000,
      time: "15:07",
    },
    {
      profile: "비비",
      name: "김옥순",
      relationship: "엄마",
      amount: -500000,
      time: "15:07",
    },
    {
      profile: "비비",
      name: "김옥순",
      relationship: "엄마",
      heart: true,
      time: "15:07",
    },
  ];

  return (
    <HomeContainer>
      <NotifyBar>새로운 마음이 도착했어요!</NotifyBar>
      <TransferContainer>
        <H3>영상으로 마음전하기</H3>
        <div>
          {tmpMembers.map((el, i) => {
            return (
              <TransferBtn
                profile={el.profile}
                name={el.name}
                relationship={el.relationship}
              ></TransferBtn>
            );
          })}
        </div>
      </TransferContainer>
      <RecentContainer>
        <H3>최근 주고받은 마음</H3>
        {tmpLists.map((el, i) => {
          return (
            <RecentBtn
              profile={el.profile}
              name={el.name}
              relationship={el.relationship}
              amount={el.amount}
              time={el.time}
              heart={el.heart}
            ></RecentBtn>
          );
        })}
      </RecentContainer>
      <Tabbar />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding-top: 28px;
  margin-bottom: 40px;
  height: 100vh;
  box-sizing: border-box;
`;

const TransferContainer = styled.div`
  margin: 0 20px;
  margin-top: 36px;

  & > h3 {
    padding-bottom: 18px;
  }
  & > div:last-child {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const RecentContainer = styled.div`
  margin: 0 20px;
  margin-top: 36px;

  & > h3 {
    padding-bottom: 18px;
  }
`;
