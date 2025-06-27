import styled from 'styled-components'
import {Layout} from 'antd'

const {Footer} = Layout;    

export const StyledLayout = styled(Layout)`
    background: ${props=>props.theme.mintgreen};
`
export const StyledFooter = styled(Footer)`
    display:flex;
    justify-content:center;
    align-item:center;
    background: ${props=>props.theme.mintgreen};
    font-family: ${props=>props.theme.inconsolata};
`