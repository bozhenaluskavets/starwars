import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/logo.png";
import { Container, Logo, Links, Link as StyledLink } from './style';
export const Header = () => {

    return (
        <Container>
            <Link to={'/'}>
                <Logo src={image}/>
            </Link>
            <Links>
                <StyledLink href="https://www.starwars.com/">Our site</StyledLink>
                <StyledLink href="https://instagram.com/starwars?igshid=YmMyMTA2M2Y=">Our Inst</StyledLink>
            </Links>
        </Container>
    )
}

export default Header;