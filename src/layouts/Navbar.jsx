import {useState} from 'react'
import {Layout, Menu} from 'antd'
import styled from 'styled-components'
import brand from '../assets/images/brand.png'
import contact from '../assets/images/contact.png'

const StyledLayout = styled(Layout)`
    background:transparent;

`

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("mail")
    const {Header, Sider} = Layout;
    const {SubMenu} = Menu;

    const handleClick = e => {
        setActiveMenu()
    }

    const StyledBrand = styled.div`
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

    const StyledImg = styled.img`
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

    const StyledHeader = styled(Header)`
        position: fixed;
        z-index: 5;
        width: 100%;
        padding:2% 4%;
        background:${props=>props.theme.darkblue};
        @media all and (max-width: 767px){
            padding:6% 8%;
        }
        
        
    `
    // const StyledMenu = styled(Menu)`
    //     background:transparent;
    //     border-bottom:transparent;
    //     color:white;
    //     font-family: ${props=>props.theme.inconsolata}
    //     overflow:auto;
    // `

    return(
        <StyledLayout>
            <StyledHeader>
                <a href="#"><StyledBrand><StyledImg style={{"float":"left"}}src={brand}></StyledImg></StyledBrand></a>
                <StyledBrand>
                    <a href="mailto:valdepenas.adrian@gmail.com">
                        <StyledImg style={{"float":"right"}} src={contact}></StyledImg>
                    </a>
                </StyledBrand>
            </StyledHeader>
        </StyledLayout>
    )
}
// onClick={handleClick} selectedKeys={activeMenu} mode="horizontal"
export default Navbar;