import React from "react";
import {
  LoginModalContainer,
  LoginModalTitle,
  LoginUser,
  LoginModalUser,
  LoginTitle,
  LoginInput,
  PasswordUser,
  PasswordModalUser,
  PasswordTitle,
  PasswordInput,
  ForgetPassword,
  LoginBtn,
  SusbcribeLink,
  ModalCloseLoginBtn,
} from "./loginModal.style";

function LoginModal({closeModal}) {
  return (
    <LoginModalContainer>
      <ModalCloseLoginBtn onClick={()=> closeModal(false)}>X</ModalCloseLoginBtn>
      <LoginModalTitle>Entre na sua conta</LoginModalTitle>
      {/* Login */}
      <LoginUser>
        <LoginModalUser>
          <LoginTitle>Login</LoginTitle>
          <LoginInput>Digite o seu usuário</LoginInput>
        </LoginModalUser>
      </LoginUser>
      {/* Password */}
      <PasswordUser>
        <PasswordModalUser>
          <PasswordTitle>Login</PasswordTitle>
          <PasswordInput>Digite o seu usuário</PasswordInput>
        </PasswordModalUser>
      </PasswordUser>
      {/* Forget password */}
      <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
      {/* Botão entrar */}
      <LoginBtn>Entrar</LoginBtn>
      {/* Botão alternativo (cadastro) */}
      <SusbcribeLink>Ainda não tem uma conta? Faça seu cadastro <span>aqui</span></SusbcribeLink>
    </LoginModalContainer>
  );
}

export default LoginModal;
