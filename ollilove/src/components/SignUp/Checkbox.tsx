import styled from "styled-components";
import React from "react";
import checked from "../../assets/checked.svg";
import unchecked from "../../assets/unchecked.svg";
import { P3 } from "../../commons/Text";
import front from "../../assets/front.png";

interface CheckboxProps {
  isChecked: boolean;
  children: React.ReactNode;
}

export function Checkbox({ isChecked, children }: CheckboxProps) {
  const imgSrc = isChecked ? checked : unchecked;
  return (
    <CheckboxContainer>
      <img src={imgSrc} alt="checkbox" />
      <P3>{children}</P3>
      <img src={front} alt="front" />
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
