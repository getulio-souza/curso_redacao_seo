import React from "react";
import {
  LoginModalContainer,
  LoginModalTitle,
  LoginModalTitleUnderline,
  LoginAndPasswordContainer,
  LoginUser,
  LoginModalUser,
  InfoTitle,
  InfoInput,
  PasswordUser,
  PasswordModalUser,
  ForgetPassword,
  LoginBtn,
  SusbcribeLinkContainer,
  SubscribeText,
  SusbcribeLinkCTA,
  ModalCloseLoginBtn,
} from "./loginModal.style";

function LoginModal({closeModal}) {
  return (
    <LoginModalContainer>
      <ModalCloseLoginBtn onClick={()=> closeModal(false)}>X</ModalCloseLoginBtn>
      <LoginModalTitle>Entre na sua conta</LoginModalTitle>
      <LoginModalTitleUnderline></LoginModalTitleUnderline>
      {/* Login */}
      <LoginAndPasswordContainer>
      <LoginUser>
        <LoginModalUser>
          <InfoTitle>Login</InfoTitle>
          <InfoInput placeholder="Digite o seu usuário"></InfoInput>
        </LoginModalUser>
      </LoginUser>
      {/* Password */}
      <PasswordUser>
        <PasswordModalUser>
          <InfoTitle>Senha</InfoTitle>
          <InfoInput placeholder="Digite sua senha"></InfoInput>
        </PasswordModalUser>
      </PasswordUser>
      </LoginAndPasswordContainer>
      {/* Forget password */}
      <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
      {/* Botão entrar */}
      <LoginBtn>Entrar</LoginBtn>
      {/* Botão alternativo (cadastro) */}
      <SusbcribeLinkContainer>
        <SubscribeText>
        Ainda não tem uma conta?
        </SubscribeText>
        <SusbcribeLinkCTA>
        Faça seu cadastro
        </SusbcribeLinkCTA>
      </SusbcribeLinkContainer>
    </LoginModalContainer>
  );
}

export default LoginModal;
