import React from "react";
import {
  StepsContainer,
  StepsTitle,
  StepsItems,
  StepItem,
  StepIconImg,
  StepText,
  // CTABtn,
} from "./steps.style";

import Icon1 from "../../assets/steps/subscribe.png"
import Icon2 from "../../assets/steps/account.png"
import Icon3 from "../../assets/steps/fill.png"
import Icon4 from "../../assets/steps/publishing.png"

function Steps() {
  return (
    <StepsContainer>
      <StepsTitle>Como funciona</StepsTitle>
      <StepsItems>
        <StepItem>
          <StepIconImg src={Icon1}></StepIconImg>
          <StepText>
            Faça o seu cadastro clicando no botão “Inscreva-se”.
          </StepText>
        </StepItem>
        <StepItem>
          <StepIconImg src={Icon3}></StepIconImg>
          <StepText>Escolha um dos planos para começar. </StepText>
        </StepItem>
        <StepItem>
          <StepIconImg src={Icon2}></StepIconImg>
          <StepText>
            Entre na sua conta. Agora, você está na página de texto. Preencha o campo “Titulo” e “Corpo do texto”.
          </StepText>
        </StepItem>
        <StepItem>
          <StepIconImg src={Icon4}></StepIconImg>
          <StepText>
            Agora clique no botão “Publicar”. Pronto, o seu texto já está no ar!
          </StepText>
        </StepItem>
      </StepsItems>
    </StepsContainer>
  );
}

export default Steps;
