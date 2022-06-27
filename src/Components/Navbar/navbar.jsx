import React from "react";
import {
  NavbarContainer,
  CategoryContainer,
  LogoContainer,
  Logo,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLink,
  SubscribeBtn,
  SubscribeText,
  OpenLinksBtn,
} from "./navbar.style";
import LogoImg from "../../assets/logo-2.png";
// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        {/* right container */}
        <LogoContainer>
          <Logo src={LogoImg}></Logo>
        </LogoContainer>
        {/* left container */}
        <CategoryContainer>
          <NavbarLink to="/comofunciona">Como funciona</NavbarLink>
          <NavbarLink to="/quemsomos">Quem somos</NavbarLink>
          <NavbarLink to="/contato">Contato</NavbarLink>
          {/* Botão de inscrição */}
          <SubscribeBtn>
            <NavbarLink to="/inscreva">
              <SubscribeText>Inscreva-se</SubscribeText>
            </NavbarLink>
          </SubscribeBtn>
          {/* botão mobile */}
          <OpenLinksBtn>&#8801;</OpenLinksBtn>
        </CategoryContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
};

export default Navbar;
