import { Layout, Row, Col } from "antd";
import styled from "styled-components";

const StyledRow = styled(Row)`
  margin: 0 auto;
  //lg
  @media all and (min-width: 1200px) {
    width: 50%;
  }
  //md
  @media all and (max-width: 1199px) {
    width: 60%;
  }
  //xs
  @media all and (max-width: 767px) {
    width: 80%;
  }
`;

const StyledCol = styled(Col)`
    //padding
    ${(props) => {
      switch (props.location) {
        case "profilepic":
          return `padding-top:0;`;
        default:
          return `padding-top:50px;`;
      }
    }}
      //alignment
      ${(props) => {
        switch (props.location) {
          case "profilepic":
            return `text-align:right;`;
          default:
            return `text-align:left;`;
        }
      }}

      //Media queries
      //lg
      @media all and (min-width:1200px){
      ${(props) => {
        switch (props.location) {
          case "skills":
            return `width: 20%;`;
        }
      }}    
      }
      //md
      @media all and (max-width: 1199px){
        ${(props) => {
          switch (props.location) {
            case "skills":
              return `width: 20%;`;
          }
        }}      
      }
      //sm
      @media all and (max-width: 991px){
          text-align:center;
      }
  
      //xs
      @media all and (max-width: 767px){
          text-align:center;
          ${(props) => {
            switch (props.location) {
              case "skills":
                return `width: 33%;`;
            }
          }}   
      }
`;
const StyledLayout = styled(Layout)`
  background: ${(props) => props.theme.darkblue};
`;

const StyledAntDLayout = {
  StyledRow,
  StyledCol,
  StyledLayout,
};

export default StyledAntDLayout;
