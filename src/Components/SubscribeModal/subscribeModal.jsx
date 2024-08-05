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
import closeBtn from "../../assets/modal/close.png"

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

//logica para validar o nome de usuario

const validateUserName = (username) => {
  const hasOnlyLetterAndSpaces = /^[A-Za-z\s]+$/.test(username);

  const alphabeticCharacterCount = (username.match(/[A-Za-z]/g) || []).length;
  return hasOnlyLetterAndSpaces && alphabeticCharacterCount >= 10;
};

//logica para vlaidar o email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email)
}

//logica para validar o campo de senha
const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test([password]);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasUpperCase && hasNumber && hasSpecialChar;
};

function SubscribeModal({ closeModal }) {
  const [OpenLoginModal, setOpenLoginModal] = useState(false);
  const [OpenSubscribeModal, SetOpenSubscribeModal] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");

  const handlePhoneNumber = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };


  //funcao para verificar nome do usuario
  const handleUserName = (e) => {
    const userNameValue = e.target.value;
    setUserName(userNameValue);

    if (userNameValue === "") {
      setErrorMessage("O nome é obrigatório.")
    } else if (!validateUserName(userNameValue)) {
      setErrorMessage("O nome deve conter apenas caracteres alfabéticos.");
      setSucessMessage("");
    } else {
      setErrorMessage("");
      setSucessMessage("O nome é válido!");
    }
  }

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (emailValue === "") {
      setErrorMessage("E-mail é obrigatório.")
    } else if (!validateEmail(emailValue)) {
      setErrorMessage("O e-mail deve estar no padrão correto.")
      setSucessMessage("")
    } else {
      setErrorMessage("");
      setSucessMessage("O e-mail está no padrão correto.")
    }
  }

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

  //habilta o botao de cadastro apenas se os campos estiverem preenchidos 
  const isUserNameValid = validateUserName(userName);
  const isEmailValid = validateEmail(email)
  const isPhoneNumberValid = phoneNumber.replace(/\D/g, "").length === 11;
  const isPasswordValid = validatePassword(password)
  
  const isFormValid =
    userName.trim() !== "" &&
    email.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    password.trim() !== "" &&
    isUserNameValid &&
    isEmailValid &&
    isPhoneNumberValid &&
    isPasswordValid;
  
  const handleSubmit = () => {
    if (isFormValid) {
      SetOpenSubscribeModal(false);
      setOpenLoginModal(true);
    }
  };

  return (
    <>
      {OpenSubscribeModal && (
        <ModalContainer>
      <ModalCloseBtn  CloseBtn onClick={() => closeModal(false)} src={closeBtn}></ModalCloseBtn>
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
          <ModalRightColumnInput
            type="text"
            id="username"
            value={userName}
            onChange={handleUserName}
            placeholder="Seu nome completo"
          />
          <ModalRightColumnInput
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="fulano_da_silva@gmail.com"
          ></ModalRightColumnInput>
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
                margin: "0 auto",
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
                margin: "0 auto",
              }}
            >
              {sucessMessage}
            </span>
          )}
        </ModalRightColumnForm>
        {/* subscribe button */}
        <ModalRightColumnButton
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Cadastrar
          </ModalRightColumnButton>
          
        {/* {OpenLoginModal && <LoginModal closeModal={() => setOpenLoginModal(false)} />} */}
      </ModalRightColumn>
    </ModalContainer>
      )}
      {OpenLoginModal && <LoginModal closeModal={()=> setOpenLoginModal(false)}/>}
    </>
  );
}

export default SubscribeModal;
