import styled from "styled-components"

const Button = styled.button`
    appearance: none;
    background-color: darkgray;
    padding: 0.25em 0.5em;
    margin: 0em 1em 1em 0em;
    transition: background-color 0.25s, color 0.25s;
    border-radius: 5px;
    border:none;

    &:hover {
        ${props => {
            switch(props.location){
                case 'landing': 
                    return `color: ${props.theme.pine};`;
                case 'aboutus':
                    return `color: ${props.theme.pine};`;
                case 'profile':
                    return `color: ${props.theme.pine};`;
                case 'booking':
                    return `color: ${props.theme.pine};`;
                default:
                    return "color: black";
            }
            return (
                "color: black;"
            )
        }}
        background-color: ${props=>props.theme.blush};
        border: none;
        cursor: pointer;
    };
    

    ${props => {
        switch(props.location){
            case 'landing': 
                return "color: white;";
            case 'aboutus':
                return `color: ${props.theme.pine};`;
            case 'profile':
                return `color: ${props.theme.pine};`;
            case 'booking':
                return `color: ${props.theme.pine};`;
            case 'admin':
                    return `color: ${props.theme.pine};`;
        }
        return (
            "color: white;"
            
        )
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