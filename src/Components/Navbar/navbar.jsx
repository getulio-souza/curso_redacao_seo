import React, { useState } from "react";
import {
  NavbarContainer,
  Modal,
  CategoryContainer,
  LogoContainer,
  Logo,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLink,
  NavbarLinkSubscribe,
  SubscribeBtn,
  OpenLinksBtn,
  LoginBtn,
  NavbarLinkExtended,
  SubscribeBtnExtended,
  LoginBtnExtended,
  // SubscribeTextExtended,
} from "./navbar.style";

import LogoImg from "../../assets/logo-2.png";
import SubscribeModal from "../SubscribeModal/subscribeModal";
import LoginModal from "../LoginModal/loginModal";

const Navbar = () => {
  {
    /* botão modal (Cadastro) */
  }
  const [openModal, setOpenModal] = useState(false);

  {
    /* botão modal (Login) */
  }
  const [OpenLoginModal, setOpenLoginModal] = useState(false);

  {
    /* adicionando funcionalidade no botão mobile  */
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

          {/* login button */}
          <LoginBtn
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            <NavbarLink to="/quemsomos">Entrar</NavbarLink>
          </LoginBtn>

          {/* modal Login button  */}
          {OpenLoginModal && <LoginModal closeModal={setOpenLoginModal} />}

          {/* subscribe button */}
          <SubscribeBtn
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <NavbarLink to="/inscreva">Inscreva-se</NavbarLink>
          </SubscribeBtn>

          {/* modal subscribe button  */}
          <Modal>
            {openModal && <SubscribeModal closeModal={setOpenModal} />}
          </Modal>
        </CategoryContainer>

        {/* mobile button */}
        <OpenLinksBtn
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {ExtendNavbar ? <>&#10005;</> : <> &#8801;</>}
        </OpenLinksBtn>
      </NavbarInnerContainer>

      {ExtendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/comofunciona">
            Como funciona
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/quemsomos">Quem somos</NavbarLinkExtended>
          <NavbarLinkExtended to="/contato">Contato</NavbarLinkExtended>

          {/* subscribe button */}
          <SubscribeBtnExtended
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <NavbarLinkExtended to="/inscreva">Inscreva-se</NavbarLinkExtended>
          </SubscribeBtnExtended>

          {/* modal button */}
          <Modal>
            {openModal && <SubscribeModal closeModal={setOpenModal} />}
          </Modal>

          {/* login button */}
          <LoginBtnExtended
            onClick={() => {
            setOpenLoginModal(true);
            }}
          >
            <NavbarLinkExtended to="/quemsomos">Entrar</NavbarLinkExtended>
          </LoginBtnExtended>
        
          

        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
