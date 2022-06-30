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
  NavbarLinkExtended,
  SubscribeBtnExtended,
  SubscribeTextExtended,
} from "./navbar.style";
import LogoImg from "../../assets/logo-2.png";
import SubscribeModal from "../SubscribeModal/subscribeModal";
const Navbar = () => {
  {
    /* botão modal */
  }
  const [openModal, setOpenModal] = useState(false);

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

          {/* subscribe button */}
          <SubscribeBtn
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <NavbarLink to="/inscreva">
              Inscreva-se
            </NavbarLink>
          </SubscribeBtn>
          <Modal>
              {/* modal button */}
              {openModal && <SubscribeModal closeModal={setOpenModal} />}
          </Modal>

          {/* mobile button */}
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
          {/* categories */}
          <NavbarLinkExtended to="/comofunciona">
            Como funciona
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/quemsomos">Quem somos</NavbarLinkExtended>
          <NavbarLinkExtended to="/contato">Contato</NavbarLinkExtended>

          {/* subscribe button */}
          <SubscribeBtnExtended>
            <NavbarLinkExtended>
              <SubscribeTextExtended>
                Inscreva-se
              </SubscribeTextExtended>
            </NavbarLinkExtended>
          </SubscribeBtnExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
