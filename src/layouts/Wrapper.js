import { Layout } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.darkblue};
  width: 100%;

  ${(props) => {
    switch (props.location) {
      case "projects":
        return "width: 60%;";
      default:
        return "width: 100%;";
    }
  }}
`;
export default Wrapper;
