import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../commons/Navbar";
import { H3, H4 } from "../../commons/Text";
import Modal from "../../components/FamilyDetail/nicknameModal";
import { Profile } from "../../components/FamilyDetail/Profile";
import { RecordBar } from "../../components/VideoRecorder/RecordBar";
import sendCall from "../../assets/sendCall.svg";
import sendMsg from "../../assets/sendMsg.svg";
import { RecentBtn } from "../../components/FamilyDetail/RecentBtn";

interface FamilyMemberDetailProps {
  name?: string;
  relationship?: string;
}

export default function FamilyMemberDetail({
  name,
  relationship,
}: FamilyMemberDetailProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onProfileClick = () => {
    setIsOpen(true);
  };

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
    <FamilyMemberDetailContainer isOpen={isOpen}>
      <Navbar type="back">
        {"이수민"}({"따"}님)과의 기록
      </Navbar>
      <Profile onProfileClick={onProfileClick}></Profile>
      <Bar>
        <img src={sendCall} alt="call" />
        <img src={sendMsg} alt="message" />
      </Bar>
      <RecordBox>
        <H3>주고받은 기록</H3>
        <RecordBar call={30} message={30} send={30}></RecordBar>
      </RecordBox>

      <RecordHeartBox>
        <H3>주고받은 마음</H3>
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
      </RecordHeartBox>
      {isOpen && <ModalBox></ModalBox>}
      <Modal isOpen={isOpen} onClose={onClose}></Modal>
    </FamilyMemberDetailContainer>
  );
}

const FamilyMemberDetailContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 36px;
`;

const RecordBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;

  h3 {
    margin-bottom: 1rem;
  }
`;

const RecordHeartBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;

  h3 {
    margin-bottom: 1rem;
  }
`;
