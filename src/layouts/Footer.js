import React from 'react'
import {Layout} from 'antd'
import styled from 'styled-components'


const StyledLayout = styled(Layout)`
    background: ${props=>props.theme.mintgreen};
`

const Footer = () => {
    const {Footer} = Layout;    

    const StyledFooter = styled(Footer)`
        display:flex;
        justify-content:center;
        align-item:center;
        background: ${props=>props.theme.mintgreen};
        font-family: ${props=>props.theme.inconsolata};
    `
    return(
        <StyledLayout>
            <StyledFooter>
                Made by Adrian Valdepeñas
            </StyledFooter>
        </StyledLayout>
    )
}

export default Footer;