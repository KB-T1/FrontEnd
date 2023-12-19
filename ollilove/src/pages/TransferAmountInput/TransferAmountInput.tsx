import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGray, ButtonYellow } from "../../commons/Button";
import { Navbar } from "../../commons/Navbar";
import { Comment, H3 } from "../../commons/Text";
import { TextArea2 } from "../../commons/TextArea2";

export default function TransferAmountInput() {
  const [amount, setAmount] = useState<number>(0);

  const myMoney = 500000;
  return (
    <TransferAmountInputContainer>
      <Navbar type="esc"> </Navbar>
      <TransferContent>
        <H3>이수민(따님) 님께</H3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextArea2 setAmount={setAmount} amount={amount} placeholder="" />
          <H3>원을 보낼게요.</H3>
        </div>
      </TransferContent>
      <MoneyBtnWrapper>
        <MoneyBtn
          onClick={() => {
            setAmount(amount + 10000);
          }}
        >
          +1만
        </MoneyBtn>
        <MoneyBtn
          onClick={() => {
            setAmount(amount + 100000);
          }}
        >
          +10만
        </MoneyBtn>
        <MoneyBtn
          onClick={() => {
            setAmount(amount + 500000);
          }}
        >
          +50만
        </MoneyBtn>
      </MoneyBtnWrapper>
      <Comment style={{ fontSize: "16px", width: "360px", textAlign: "right" }}>
        출금 가능 금액: {myMoney.toLocaleString()}원
      </Comment>
      {amount > 0 && amount <= myMoney ? (
        <ButtonYellow>확인</ButtonYellow>
      ) : (
        <ButtonGray>확인</ButtonGray>
      )}
    </TransferAmountInputContainer>
  );
}

const TransferAmountInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    margin: 0 auto;
    margin-top: 143px;
  }
`;

const TransferContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 36px;
  margin-left: 40px;

  & > h3 {
    margin-bottom: 36px;
  }
`;

const MoneyBtnWrapper = styled.div`
  margin-top: 48px;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
  margin-bottom: 24px;
`;

const MoneyBtn = styled.button`
  height: 52px;

  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--main1, #ffda49);
  font-size: 16px;
  font-family: "KBFGDisplayM";
  margin: 0;
  border: 0;
`;
