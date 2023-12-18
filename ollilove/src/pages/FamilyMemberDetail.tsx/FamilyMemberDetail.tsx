import React from "react";
import styled from "styled-components";
import { Navbar } from "../../commons/Navbar";
import { RecordBar } from "../../components/VideoRecorder/RecordBar";

interface FamilyMemberDetailProps {
  name?: string;
  relationship?: string;
}

export default function FamilyMemberDetail({
  name,
  relationship,
}: FamilyMemberDetailProps) {
  return (
    <FamilyMemberDetailContainer>
      <Navbar type="back">
        {"이수민"}({"따"}님)과의 기록
      </Navbar>
      <RecordBar call={30} message={30} send={30}></RecordBar>
    </FamilyMemberDetailContainer>
  );
}

const FamilyMemberDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;
