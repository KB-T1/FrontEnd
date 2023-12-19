import React from "react";
import styled from "styled-components";
import { Navbar } from "../../commons/Navbar";
import { H1 } from "../../commons/Text";

export default function SignUp() {
  return (
    <SignUpContainer>
      <Navbar type="back">올리사랑</Navbar>

      <Content>
        <H1>서비스 이용동의</H1>
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
  flex-direction: column;
  margin-left: 20px;
  margin-top: 36px;
`;
