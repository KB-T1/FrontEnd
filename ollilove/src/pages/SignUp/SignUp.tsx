import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../commons/Navbar";
import { H1 } from "../../commons/Text";
import { Checkbox } from "../../components/SignUp/Checkbox";
import check from "../../assets/checked.svg";
import uncheck from "../../assets/unchecked.svg";

export interface CheckStateType {
  data: { id: number; isChecked: boolean }[];
}

export default function SignUp() {
  const [checkState, setCheckState] = useState<CheckStateType>({
    data: [
      {
        id: 0,
        isChecked: false,
      },
      {
        id: 1,
        isChecked: false,
      },
      {
        id: 2,
        isChecked: false,
      },
    ],
  });
  const [wholeCheck, setWholeCheck] = useState<boolean>(false);

  const termsAndConditions = [
    {
      id: 0,
      text: (
        <>
          [필수] 개인(신용)정보 수집 이용 동의서 <br />
          (올리사랑 서비스)
        </>
      ),
    },
    {
      id: 1,
      text: (
        <>
          [필수] 개인(신용)정보 제공 동의서 <br />
          (올리사랑 서비스)
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          [필수] 개인(신용)정보 제 3자 제공 동의서 <br />
          (올리사랑 서비스)
        </>
      ),
    },
  ];

  return (
    <SignUpContainer>
      <Navbar type="back">올리사랑</Navbar>

      <Content>
        <H1>서비스 이용동의</H1>

        <CheckboxContainer></CheckboxContainer>
        {termsAndConditions.map((el, i) => (
          <Checkbox
            checkState={checkState}
            setIsChecked={setCheckState}
            key={i}
            id={i}
          >
            {el.text}
          </Checkbox>
        ))}
      </Content>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  width: 353px;
  flex-direction: column;

  margin-left: 20px;
  margin-top: 36px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div:last-child {
    display: flex;
    width: 300px;

    & > p {
      margin-left: 20px;
    }
  }
`;
