import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { NotifyBar } from "../../commons/NotifyBar";
import { Tabbar } from "../../commons/Tabbar";
import { H3 } from "../../commons/Text";
import { RecentBtn } from "../../components/FamilyDetail/RecentBtn";
import { TransferBtn } from "../../components/VideoRecorder/TransferBtn";
import { useGetFamilyInfo, useGetTransferAll } from "../../ReactQuery";
import { useRecoilState } from "recoil";
import { TransferInfo } from "../../types/transferInfo";
import { FamilyMember } from "../../types/familyMember";
import { QueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  //유저 정보 얻어오기
  const localStorageUserId = localStorage.getItem("userId");
  const localStorageFamilyId = localStorage.getItem("familyId");
  const [userId, setUserId] = useState<number>(0);
  const [familyId, setFamilyId] = useState<string>("");

  if (localStorageUserId !== null && localStorageFamilyId != null) {
    setFamilyId(JSON.parse(localStorageFamilyId));
    setUserId(JSON.parse(localStorageUserId));
  } else {
    navigate("/signup");
  }

  const queryClient = new QueryClient();

  const user = queryClient.getQueryData(["getUser", userId]);

  // 유저 가족 정보 & 송금 내역 가져오기

  const familyInfoQuery = useGetFamilyInfo({ userId });
  const transferListQuery = useGetTransferAll({ userId: userId, count: 10 });

  const familydata = familyInfoQuery.data as FamilyMember[]; // Assuming FamilyMember is the correct type
  const transferlist = transferListQuery.data as TransferInfo[];

  if (familyInfoQuery.isFetching || transferListQuery.isFetching) {
    return <div>isFetching...</div>;
  }

  if (familyInfoQuery.isError || transferListQuery.isError) {
    return <div>isError...</div>;
  }

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
          {familydata.map((el, i) => {
            return (
              <TransferBtn
                key={i}
                profile={el.profile}
                name={el.userName}
                relationship={el.nickName}
                onClickDetailBtn={() => {
                  navigate("/familymemberdetail", { state: el.userId });
                }}
                onClickTransferBtn={() => {
                  navigate("/transferamountinput", { state: el.userId });
                }}
              ></TransferBtn>
            );
          })}
        </div>
      </TransferContainer>
      <RecentContainer>
        <H3>최근 주고받은 마음</H3>
        {transferlist.map((el, i) => {
          return (
            <RecentBtn
              key={i}
              profile={el.profile}
              name={el.senderId === userId ? el.receiverName : el.senderName}
              relationship={el.nickname}
              amount={el.amount}
              time={el.historyCreatedAt}
              heart={false}
              onClickTransfer={() => {
                navigate("/receiveheart", {
                  state: {
                    historyId: el.historyId,
                    amount: el.amount,
                    videoUrl: el.videoUrl,
                    targetName:
                      el.senderId === userId ? el.receiverName : el.senderName,
                    nickname: el.nickname,
                  },
                });
              }}
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
