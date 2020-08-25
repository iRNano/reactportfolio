import React from "react";
import { Row } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Wrapper from "../layouts/Wrapper";

//images
import profilepic from "../assets/images/profilepic.jpeg";

import github from "../assets/images/githubgray.png";
import gitlab from "../assets/images/gitlabgray.png";
import linkedin from "../assets/images/linkedingray.png";
//shared comp
import Heading from "../shared/Heading";
import Button from "../shared/Button";
import StyledAntDLayout from "../shared/StyledAntDLayout";

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media all and (max-width: 767px) {
    text-align: center;
  }
`;

// background-color: #FF4136;
//   width: 300px;
//   height: 300px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
const ProfilePic = styled.img.attrs({
  src: profilepic,
})`
  max-width: 350px;
  border-radius: 50%;
  filter: grayscale(60%);
  &:hover {
    filter: grayscale(0%);
  }
  //lg
  @media all and (min-width: 1200px) {
    max-width: 350px;
  }
  //md
  @media all and (max-width: 1199) {
    max-width: 300px;
  }
  //sm
  @media all and (max-width: 991px) {
    max-width: 250pxpx;
  }

  //xs
  @media all and (max-width: 767px) {
    max-width: 230px;
  }
`;

const IconSizes = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;

  //sm
  @media all and (max-width: 991px) {
    margin: 0 auto;
  }
  // @media all and (max-width: 767px){
  //     margin: 0 auto;
  // }
  .icons {
    margin: 5% 5% 0 0;

    //lg
    @media all and (min-width: 1200px) {
      max-width: 35px;
    }
    //md
    @media all and (max-width: 1199px) {
      max-width: 30px;
    }
    //sm
    @media all and (max-width: 991px) {
      max-width: 30px;
    }

    //xs
    @media all and (max-width: 767px) {
      text-align: center;
      max-width: 30px;
    }
  }
`;

const Cover = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <StyledAntDLayout.StyledLayout>
          <Row justify="center" gutter={24} style={{ margin: 0 }}>
            <StyledAntDLayout.StyledCol
              location="profilepic"
              lg={{ span: 10 }}
              xl={{ span: 10 }}
              xs={{ offset: 0, span: 24 }}
            >
              <ProfilePic></ProfilePic>
            </StyledAntDLayout.StyledCol>
            <StyledAntDLayout.StyledCol lg={{ span: 10 }} xs={{ span: 24 }}>
              <Heading.H1 style={{ margin: 0 }}>Adrian </Heading.H1>
              <Heading.H1 style={{ margin: 0 }}>Valdepeñas</Heading.H1>
              <Heading.H4>Web Developer</Heading.H4>
              <a
                href={`${process.env.PUBLIC_URL}/ValdepenasAdrianCV.pdf`}
                download
              >
                <Button size="small" location="landing" margin="y">
                  Download Resume
                </Button>
              </a>
              <IconSizes>
                <a href="https://github.com/iRNano" target="_blank">
                  <img class="icons" src={github}></img>
                </a>
                <a href="https://gitlab.com/valdepenas.adrian" target="_blank">
                  {" "}
                  <img class="icons" src={gitlab}></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-valdepenas-2b861a17b/"
                  target="_blank"
                >
                  <img class="icons" src={linkedin}></img>
                </a>
              </IconSizes>
            </StyledAntDLayout.StyledCol>
          </Row>
        </StyledAntDLayout.StyledLayout>
      </ContentDiv>
    </Wrapper>
  );
};

export default Cover;
