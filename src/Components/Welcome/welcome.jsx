import {
  WelcomeContainer,
  WelcomeTitle,
  WelcomeImg,
  WelcomeContentContainer,
  WelcomeContent,
} from "./welcome.style";

import React from "react";
import welcomeimg from "../../assets/welcome.jpg";

function welcome() {
  return (
    <WelcomeContainer>
      <WelcomeTitle>Bem-vindo ao curso de Redação para SEO!</WelcomeTitle>
      <WelcomeImg src={welcomeimg}></WelcomeImg>
      <WelcomeContentContainer>
      <WelcomeContent>
        Só aqui você terá a oportunidade de desenvolver suas habilidades na
        escrita, tornando-se um escritor de SEO de alta capacidade técnica e
        criativa.
      </WelcomeContent>
        <WelcomeContent>
          Nunca mais você vai ficar olhando para uma folha em branco sem saber o
          que escrever!
        </WelcomeContent>
        <WelcomeContent>
          A gente está aqui para te ajudar desde as primeiras palavras até a
          construção de uma narrativa sólida e consistente que gera resultados.
        </WelcomeContent>
      </WelcomeContentContainer>
    </WelcomeContainer>
  );
}

export default welcome;
