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
  /* botão modal (Cadastro) */
  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);

  /* botão modal (Login) */
  const [OpenLoginModal, setOpenLoginModal] = useState(false);

  /* adicionando funcionalidade no botão mobile  */
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
          <NavbarLink to="/editor-page">Publique seu texto</NavbarLink>
          <NavbarLink to="/quemsomos">Quem somos</NavbarLink>
          {/* <Link to="/footer" spy={true} smooth={true} offset={50} duration={500} onClick={} >Contato</Link> */}

          {/* login button */}
          <LoginBtn
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            <NavbarLink>Entrar</NavbarLink>
          </LoginBtn>

          <NavbarLink to="/contato">Meu Perfil</NavbarLink>
          {/* modal Login button  */}
          {OpenLoginModal && <LoginModal closeModal={setOpenLoginModal} />}

          {/* subscribe button */}
          <SubscribeBtn
            onClick={() => {
              setOpenSubscribeModal(true);
            }}
          >
            <NavbarLink>Inscreva-se</NavbarLink>
          </SubscribeBtn>

          {/* modal subscribe button  */}
          <Modal>
            {openSubscribeModal && (
              <SubscribeModal closeModal={setOpenSubscribeModal} />
            )}
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
          <NavbarLinkExtended to="/editor-page">
            Publique seu texto
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/quemsomos">Quem somos</NavbarLinkExtended>
          <NavbarLinkExtended to="/contato">Contato</NavbarLinkExtended>

          {/* subscribe button */}
          <SubscribeBtnExtended
            onClick={() => {
              setOpenSubscribeModal(true);
            }}
          >
            <NavbarLinkExtended>Inscreva-se</NavbarLinkExtended>
          </SubscribeBtnExtended>

          {/* modal button */}
          <Modal>
            {openSubscribeModal && (
              <SubscribeModal closeModal={setOpenSubscribeModal} />
            )}
          </Modal>

          {/* login button */}
          <LoginBtnExtended
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            <NavbarLinkExtended>Entrar</NavbarLinkExtended>
          </LoginBtnExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
