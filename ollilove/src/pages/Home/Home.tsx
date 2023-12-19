import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { NotifyBar } from "../../commons/NotifyBar";
import { Tabbar } from "../../commons/Tabbar";
import { H3 } from "../../commons/Text";
import { RecentBtn } from "../../components/FamilyDetail/RecentBtn";
import { TransferBtn } from "../../components/VideoRecorder/TransferBtn";
import { GetFamilyInfo, GetTransferList } from "../../ReactQuery";
import { useRecoilState } from "recoil";
import { TransferInfo } from "../../types/transferInfo";
import { FamilyMember } from "../../types/familyMember";
import { QueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  //유저 정보 얻어오기
  const [user, setUser] = useState<number>();
  const userId = localStorage.getItem("userId");

  if (userId != null) {
    setUser(JSON.parse(userId));
  } else {
    navigate("/signup");
  }

  // 유저 가족 정보 & 송금 내역 가져오기

  const queryClient = new QueryClient();

  const familydata = queryClient.getQueryData("getFamilyInfo");
  const transferlist = queryClient.getQueryData("getTransferList");

  const tmpMembers = [
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
      hearts: false,
    },
  ];

  const onClickNotify = () => {};

  const onClickMember = (familyId: number) => {};

  const onClickTransferInfo = (transferId: number) => {};

  return (
    <HomeContainer>
      <NotifyBar
        onClick={() => {
          navigate("/receiveheart");
        }}
      >
        새로운 마음이 도착했어요!
      </NotifyBar>
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
              heart={el.hearts}
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
