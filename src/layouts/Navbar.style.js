import styled from 'styled-components'
import {Layout, Menu} from 'antd'
const {Header, Sider} = Layout;
const {SubMenu} = Menu;

export const StyledBrand = styled.div`
        // float:left;
        .brand{
            //lg
            @media all and (min-width:1200px){
                max-width:300px;
            }
            //md
            @media all and (max-width: 1199px){
                max-width:90px;
            }
            //sm
            @media all and (max-width: 991px){
                max-width: 85px;
            }

            //xs
            @media all and (max-width: 767px){
                max-width:70px;
            }
        }
        
    `

export const StyledImg = styled.img`
        float:right;
        //lg
        @media all and (min-width:1200px){
            max-width:100px;
        }
        //md
        @media all and (max-width: 1199px){
            max-width: 90px;
        }
        //sm
        @media all and (max-width: 991px){
            max-width: 80px;
        }

        //xs
        @media all and (max-width: 767px){
            max-width:70px;
        }
    `

export const StyledHeader = styled(Header)`
        position: fixed;
        z-index: 5;
        width: 100%;
        padding:2% 4%;
        background:${props=>props.theme.darkblue};
        @media all and (max-width: 767px){
            padding:6% 8%;
        }
        
        
    `

export const StyledLayout = styled(Layout)`
    background:transparent;

`