import brand from '../assets/images/brand.png'
import contact from '../assets/images/contact.png'
import {StyledBrand, StyledHeader, StyledImg, StyledLayout} from './Navbar.style'


const Navbar = () => {
    return(
        <StyledLayout>
            <StyledHeader>
                <a href="#">
                    <StyledBrand>
                        <StyledImg style={{ float: "left" }} src={brand} alt="Home" />
                    </StyledBrand>
                </a>
                <StyledBrand>
                    <a href="mailto:valdepenas.adrian@gmail.com">
                        <StyledImg
                            style={{ float: "right" }}
                            src={contact}
                            alt="Contact via email"
                        />
                    </a>
                </StyledBrand>
            </StyledHeader>
        </StyledLayout>
    )
}
export default Navbar;