import React, {useState} from 'react'
import {Layout, Menu} from 'antd'
import styled from 'styled-components'
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';    
import {gray} from '@ant-design/colors'

const StyledLayout = styled(Layout)`
    background:transparent;
`

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("mail")
    const {Header, Sider} = Layout;
    const StyledHeader = styled(Header)`
        background:transparent;
    `
    const {SubMenu} = Menu;

    const handleClick = e => {
        setActiveMenu()
    }
    return(
        <StyledLayout>
            <StyledHeader style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
                <Menu style={{"background-color": "#f0f2f5"}}onClick={handleClick} selectedKeys={activeMenu} mode="horizontal">
                </Menu>
            </StyledHeader>
        </StyledLayout>
    )
}

export default Navbar;