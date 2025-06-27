import {useState} from 'react'
import brand from '../assets/images/brand.png'
import contact from '../assets/images/contact.png'
import {StyledBrand, StyledHeader, StyledImg, StyledLayout} from './Navbar.style'


const Navbar = () => {
    // const [activeMenu, setActiveMenu] = useState("mail")

    const handleClick = e => {
        setActiveMenu()
    }

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