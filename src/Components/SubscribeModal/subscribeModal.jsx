import React, { useState } from "react";
import {
  ModalContainer,
  ModalLeftColumn,
  ModalLeftColumnTitle,
  ModalLeftColumnText,
  ModalRightColumn,
  ModalRightColumnTitle,
  ModalRightColumnImage,
  ModalRightColumnForm,
  ModalRightColumnInput,
  ModalRightColumnButton,
  ModalCloseBtn,
} from "./subscribeModal.style";
import ModalImg from "../../assets/modal/modal_btn_subscribe.jpg";
import LoginModal from "../LoginModal/loginModal";

function SubscribeModal({ closeModal }) {
  const [OpenLoginModal, setOpenLoginModal] = useState(false);
  const [OpenSubscribeModal, SetOpenSubscribeModal] = useState(false);

  return (
    <ModalContainer>
      <ModalCloseBtn onClick={() => closeModal(false)}>X</ModalCloseBtn>
      {/* left column */}
      <ModalLeftColumn>
        <ModalLeftColumnTitle>VAMOS COMEÇAR?</ModalLeftColumnTitle>
        <ModalLeftColumnText>
          Preencha o formulário ao lado para fazer o seu cadastro.
        </ModalLeftColumnText>
      </ModalLeftColumn>
      {/* right column */}
      <ModalRightColumn>
        <ModalRightColumnTitle>Curso de redação para SEO</ModalRightColumnTitle>
        <ModalRightColumnImage src={ModalImg}></ModalRightColumnImage>
        <ModalRightColumnForm>
          <ModalRightColumnInput placeholder="Nome"></ModalRightColumnInput>
          <ModalRightColumnInput placeholder="E-mail"></ModalRightColumnInput>
          <ModalRightColumnInput placeholder="Telefone"></ModalRightColumnInput>
          <ModalRightColumnInput placeholder="Senha"></ModalRightColumnInput>
        </ModalRightColumnForm>
        {/* subscribe button */}
        <ModalRightColumnButton
          onClick={() => {
            setOpenLoginModal(true) && SetOpenSubscribeModal(false);
          }}
        >
          Cadastrar
        </ModalRightColumnButton>
        {OpenLoginModal && <LoginModal closeModal={setOpenLoginModal} />}
      </ModalRightColumn>
    </ModalContainer>
  );
}

export default SubscribeModal;
