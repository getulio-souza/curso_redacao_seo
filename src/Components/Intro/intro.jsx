import React from "react";

import {
  IntroContainer,
  FirstContent,
  FirstContentText,
  ContentImg,
  SecondContent,
  SecondContentText,
} from "./intro.style";

import introImg1 from "../../assets/introimg1.jpg";
import introImg2 from "../../assets/introimg2.jpg";

function Intro() {
  return (
    <IntroContainer>
      <FirstContent>
        <FirstContentText>
          Cansado de pagar caro para aprender a escrever textos que não alcançam
          as primeiras posições no Google?
        </FirstContentText>
        <ContentImg src={introImg1}></ContentImg>
      </FirstContent>
      <SecondContent>
        <ContentImg src={introImg2}></ContentImg>
        <SecondContentText>
          É possível contar histórias que cativam, informam, ensinam e ainda
          sejam encontradas pelas pessoas na web.
          <SecondContentText>
          Chegou a sua vez de aprender de verdade como escrever para a internet.
          </SecondContentText>
        </SecondContentText>
      </SecondContent>
    </IntroContainer>
  );
}

export default Intro;
