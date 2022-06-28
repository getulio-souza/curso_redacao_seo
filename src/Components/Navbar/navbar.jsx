import React, { useState } from "react";
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
  NavbarLinkExtended,
  SubscribeBtnExtended,
  SubscribeTextExtended,
} from "./navbar.style";
import LogoImg from "../../assets/logo-2.png";

const Navbar = () => {
  {
    /* adicionando funcionalidade no botão mobile */
  }
  const [ExtendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer ExtendNavbar={ExtendNavbar}>
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
          <OpenLinksBtn
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {ExtendNavbar ? <> &#10005;</> : <> &#8801; </>}
          </OpenLinksBtn>
        </CategoryContainer>
      </NavbarInnerContainer>

      {ExtendNavbar && (
        <NavbarExtendedContainer>
        {/* categorias */}
        <NavbarLinkExtended to="/comofunciona">Como funciona</NavbarLinkExtended>
        <NavbarLinkExtended to="/quemsomos">Quem somos</NavbarLinkExtended>
          <NavbarLinkExtended to="/contato">Contato</NavbarLinkExtended>
          
        {/* Botão de inscrição */}
        <SubscribeBtnExtended>
          <NavbarLinkExtended to="/inscreva">
            <SubscribeTextExtended to="/inscreva">Inscreva-se</SubscribeTextExtended>
          </NavbarLinkExtended>
        </SubscribeBtnExtended>
      </NavbarExtendedContainer>
      )}

    </NavbarContainer>
  );
};

export default Navbar;
