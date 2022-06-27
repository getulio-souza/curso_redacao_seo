import React from "react";

import {
  IntroContainer,
  FirstContent,
  FirstContentText,
  FirstContentImg,
  SecondContent,
  SecondContentImg,
  SecondContentText,
} from "./intro.style";

import introImg1 from "../../assets/introimg1.jpg";
// import introImg2 from "../../assets";

function Intro() {
  return (
    <IntroContainer>
      <FirstContent>
        <FirstContentText>
          Cansado de pagar caro para aprender a escrever textos que não alcançam
          as primeiras posições no Google?
        </FirstContentText>
        <FirstContentImg src={introImg1}></FirstContentImg>
      </FirstContent>
      <SecondContent>
        <SecondContentImg src={introImg1}></SecondContentImg>
        <SecondContentText>
          É possível contar histórias que cativam, informam, ensinam e ainda
          sejam encontradas pelas pessoas na web.
          Chegou a sua vez de aprender de
          verdade como escrever para a internet.
        </SecondContentText>
      </SecondContent>
    </IntroContainer>
  );
}

export default Intro;
