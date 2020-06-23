import styled from "styled-components"

const Button = styled.button`
    appearance: none;
    background-color: ${props=>props.theme.mintgreen};
    padding: 0.25em 0.5em;
    margin: 0em 1em 1em 0em;
    transition: background-color 0.25s, color 0.25s;
    border:none;
    font-weight:bold;
    color:black;
    font-family: ${props=>props.theme.inconsolata};

    &:hover {
        ${props => {
            switch(props.location){
                case 'landing': 
                    return "color:black"
                case 'aboutus':
                    return `color: ${props.theme.pine};`;
                case 'profile':
                    return `color: ${props.theme.pine};`;
                case 'booking':
                    return `color: ${props.theme.pine};`;
                default:
                    return "color: black";
            }
            // return (
            //     "color: black;"
            // )
        }}
        background-color: ${props=>props.theme.mintgreen};
        border: none;
        cursor: pointer;
    };
    

    ${props => {
        switch(props.location){
            case 'landing': 
                return "padding: 1% 3%;";
            case 'aboutus':
                return `color: ${props.theme.pine};`;
            case 'profile':
                return `color: ${props.theme.pine};`;
            case 'booking':
                return `color: ${props.theme.pine};`;
            case 'admin':
                    return `color: ${props.theme.pine};`;
            default:
                return `color: black;`;   
        }
        // return (
        //     "color: white;"
            
        // )
    }}

    ${props => {
        
        switch(props.size){
            case 'small': 
                return "font-size: 12px;";
            case 'large':
                return "font-size: 20px;";
        }

        return "font-size: 16px;";
    }}

`;

export default Button