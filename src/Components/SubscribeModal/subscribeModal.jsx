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

//formatando numero de telefone para o padrao (99) 99999-9999
const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 2) {
    return `${cleaned}`
  }
  if (cleaned.length <= 6) {
    return `(${cleaned.slice(0,2)}) ${cleaned.slice(2)}`
  }
  return `(${cleaned.slice(0,2)}) ${cleaned.slice(2,7)}-${cleaned.slice(7,11)}`
}

function SubscribeModal({ closeModal }) {
  const [OpenLoginModal, setOpenLoginModal] = useState(false);
  const [OpenSubscribeModal, SetOpenSubscribeModal] = useState(false);

  //inputs validations
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

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
          <ModalRightColumnInput
            placeholder="(xx) xxxx-xxx"
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            pattern="[0-9]*"
            maxLength="15"
          ></ModalRightColumnInput>
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
