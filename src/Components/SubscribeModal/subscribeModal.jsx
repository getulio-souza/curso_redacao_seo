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

//formatando numero de telefone para o padrao (xx) xxxxx-xxx
const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 2) {
    return `${cleaned}`;
  }
  if (cleaned.length <= 6) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  }
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
    7,
    11
  )}`;
};

//logica para validar o campo de senha
const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test([password]);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasUpperCase && hasNumber && hasSpecialChar;
};

function SubscribeModal({ closeModal }) {
  const [OpenLoginModal, setOpenLoginModal] = useState(false);
  const [OpenSubscribeModal, SetOpenSubscribeModal] = useState(false);

  //inputs validations
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  //password
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (passwordValue === "") {
      setErrorMessage("A senha é obrigatória.");
      setSucessMessage("");
    } else if (!validatePassword(passwordValue)) {
      setErrorMessage("A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial");
      setSucessMessage("")
    } else {
      setErrorMessage("")
      setSucessMessage("A senha corresponde ao padrao solicitado");
    }
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
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            pattern="[0-9]*"
            maxLength="15"
            placeholder="(xx) xxxx-xxx"
          ></ModalRightColumnInput>
          <ModalRightColumnInput
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder="Digite uma senha"
          />
          {/* mensagem de erro */}
          {errorMessage && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontFamily: "inter",
                fontSize: "10px",
                width: "200px",
                margin: "0 auto"
              }}
            >
              {errorMessage}
            </span>
          )}
          {/* mensagem de sucesso */}
          {sucessMessage && (
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                fontFamily: "inter",
                fontSize: "10px",
                width: "200px",
                margin: "0 auto"
              }}
            >
              {sucessMessage}
            </span>
          )}
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
