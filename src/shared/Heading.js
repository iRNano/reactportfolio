import {rem} from 'polished'
import styled, {css} from 'styled-components'

const baseStyles = css`
    font-family:${props=>props.theme.inconsolata};
    color:white;
    ${props => {
        switch(props.location){
            case'skills':
                return `padding-top: 1em;`
            case'booking':
                return `color: ${props.theme.pine};`
            case'checkout':
                return `color: ${props.theme.pine};`
            case'profile':
                return `color: ${props.theme.pine};`
            case'admin':
                return `color: ${props.theme.pine};`
        }
        return "color:WHITE;"
    }}
    line-height: 1.2;
`;

const H0 = styled.h1`
    ${baseStyles}
    font-size: ${rem(33)};
    :after{
        display: block;
        content: '';
        border-bottom: solid 3px ${props=>props.theme.mintgreen};
        width:40px;
        margin: 0 auto;
        padding-top:20px;
    }

`
const H1 = styled.h1`
    ${baseStyles}
    font-size: ${rem(33)};

    // .line{
    //     display:block;
    //     padding:.5rem 1rem;
    // }

    // .line:after {
    //     display: block;
    //     content: '';
    //     border-bottom: solid 1px red;
    //     transform: scaleX(1);
    //     transition: transform 250ms ease-in-out;
    // }
    // .line:hover:after { transform: scaleX(0); 
    // }

    ${props=>{
        switch(props.location){
            case 'title':
                return `:after{
                    display: block;
                    content: '';
                    border-bottom: solid 3px ${props=>props.theme.mintgreen};
                    width:40px;
                    margin: 0 auto;
                }`;
            default:
                return `:after{}`    
        }
    }}
    

    // :hover:after{
    //     transform: scaleX(1); 
    // }
`;

const H2 = styled.h2`
    ${baseStyles};
    font-size: ${rem(28)};
`;

const H3 = styled.h3`
    ${baseStyles};
    font-size: ${rem(23)};
`;

const H4 = styled.h4`
    ${baseStyles};
    //lg
    @media all and (min-width:1200px){
        font-size: ${rem(19)};
        
    }
    //md
    @media all and (min-width: 992px){
        font-size: ${rem(17)};
        
    }
    //sm
    @media all and (min-width: 750px){
        font-size: ${rem(14)};
        
    }

    //xs
    @media all and (max-width: 749px){
        font-size: ${rem(12)};
    }
`;

const Heading = {
    H0,
    H1,
    H2,
    H3,
    H4,
};

export default Heading