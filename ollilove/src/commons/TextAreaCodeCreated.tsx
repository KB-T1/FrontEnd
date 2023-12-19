import styled from "styled-components";

interface TextAreaProps {
  value: string;
}

export const TextAreaCodeCreated = ({ value }: TextAreaProps) => {
  return <Input value={value} type="text"></Input>;
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
  width: 300px;
  /* Display Bold 20 */
  text-align: center;
  font-family: "KBFG Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
