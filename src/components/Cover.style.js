import styled from "styled-components";
import profilepic from "../assets/images/profilepic.jpeg";

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media all and (max-width: 767px) {
    text-align: center;
  }
`;

export const ProfilePic = styled.img.attrs({
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

export const IconSizes = styled.div`
  // width: 120px;
  display: flex;
  // justify-content: space-between;

  //sm
  @media all and (max-width: 991px) {
    // margin: 0 auto;
    justify-content:center;
  }
  // @media all and (max-width: 767px){
  //     margin: 0 auto;
  // }
  
  a{
    padding: 0 .5em;
  }
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
