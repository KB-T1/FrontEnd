import MainImage from "../../assets/landingMainImage.svg";
import MainButton from "../../assets/landingButton.svg";
import styled from "styled-components";
import { Comment, P2 } from "../../commons/Text";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/home");
  };
  return (
    <PageWrapper>
      <img src={MainImage} alt="mainImage" />

      <HeadingContainer>
        <h1>올리사랑</h1>
        <Comment>부모를 향한 자식의 사랑</Comment>
      </HeadingContainer>
      <ContentContainer>
        <P2>영상편지로 용돈을 송금하여</P2>
        <P2>특별한 마음을 전해보세요.</P2>
      </ContentContainer>

      <img onClick={handleBtnClick} src={MainButton} alt="start" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #ffda49;
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding-top: 182px;

  & > img:first-child {
    margin: 0 auto;
  }

  & > img:last-child {
    position: fixed;
    bottom: 3rem;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

const HeadingContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  margin-top: 4rem;

  & > h1 {
    font-size: 48px;
    color: #4a4840;
    font-family: "KBFGDisplayB";
    margin: 0 auto;
  }
`;

const ContentContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  margin-top: 4rem;
  color: #4a4840;
`;
