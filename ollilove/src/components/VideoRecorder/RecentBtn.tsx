import styled from "styled-components";
import profileBibi from "../../assets/profileBibi.svg";
import { P2, Comment2 } from "../../commons/Text";

interface RecentBtnProps {
  profile: string;
  name: string;
  relationship: string;
  amount: number;
  time: string;
}

export function RecentBtn({
  profile,
  name,
  relationship,
  amount,
  time,
}: RecentBtnProps) {
  return (
    <RecentBtnContainer>
      <img src={profileBibi} />
      <div>
        <P2>
          {name}({relationship}){amount > 0 ? "에게" : "로부터"}
        </P2>
        <Comment2>{time}</Comment2>
      </div>
      <P2>{amount.toLocaleString()}원</P2>
    </RecentBtnContainer>
  );
}

const RecentBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  width: 353px;
  height: 80px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  background: var(--white, #fff);
  margin-bottom: 12px;
  border-radius: 20px;

  & > p:last-child {
    color: #f06687;
  }

  & > div {
    padding-right: 66px;
  }
`;
