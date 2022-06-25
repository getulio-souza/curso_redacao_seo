import React from "react";
import {
  NavbarContainer,
  CategoryContainer,
  LogoContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  SubscribeBtn,
  SubscribeText,
  Logo,
} from "./navbar.style";
import LogoImg from "../../assets/logo-2.png";

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
        </CategoryContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
};

export default Navbar;
