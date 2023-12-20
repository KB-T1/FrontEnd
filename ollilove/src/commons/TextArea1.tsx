import React from "react";
import styled from "styled-components";

interface TextAreaProps {
  placeholder: string;
  nickName: string;
  setNickName: (str: string) => void;
}

export const TextArea1 = ({
  nickName,
  setNickName,
  placeholder,
}: TextAreaProps) => {
  return (
    <Input
      value={nickName}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value);
      }}
      type="text"
      placeholder={placeholder}
    ></Input>
  );
};

const Input = styled.input`
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom: 3px solid var(--gray4, #bababa);
  gap: 10px;
  outline: 0;
  margin-top: 4rem;
  width: 200px;
  /* Display Bold 20 */
  text-align: center;
  font-family: "KBFG Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
