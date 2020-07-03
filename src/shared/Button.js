import styled from "styled-components";

const Button = styled.button`
    appearance: none;
    background-color: ${(props) => props.theme.mintgreen};
    padding: 0.25em 0.5em;
    transition: background-color 0.25s, color 0.25s;
    border:none;
    font-weight:bold;
    color:black;
    font-family: ${(props) => props.theme.inconsolata};

    //props
    //on hover bg & color
    &:hover {
        background-color: ${(props) => props.theme.mintgreen};
        border: none;
        cursor: pointer;
        ${(props) => {
          switch (props.location) {
            case "landing":
              return "color:black;";
          }
          return "color: black;";
        }}
        
    };
    // margin
    ${(props) => {
      switch (props.margin) {
        case "none":
          return "margin: 0;";
        case "x":
          return "margin: 0em 1em;";
        case "y":
          return "margin: 1em 0em;";
      }
      return "margin: 1em;";
    }}
    //color per location
    ${(props) => {
      switch (props.location) {
        case "landing":
          return "padding: 1% 3%;";
      }
      return "color: black;";
    }}
    //font size
    ${(props) => {
      switch (props.size) {
        case "small":
          return "font-size: 12px;";
        case "large":
          return "font-size: 20px;";
      }

      return "font-size: 16px;";
    }}

`;

export default Button;
