import React from "react";
import {
  StepsContainer,
  StepsTitle,
  StepsItems,
  StepItem,
  StepIcon,
  StepText,
} from "./steps.style";

function Steps() {
  return (
    <StepsContainer>
      <StepsTitle>Como funciona</StepsTitle>
      <StepsItems>
        <StepItem>
          <StepIcon>1</StepIcon>
          <StepText>
            Faça o seu cadastro clicando no botão “Inscreva-se”.
          </StepText>
        </StepItem>
        <StepItem>
          <StepIcon>2</StepIcon>
          <StepText>Escolha um dos planos para começar. </StepText>
        </StepItem>
        <StepItem>
          <StepIcon>3</StepIcon>
          <StepText>
            Entre na sua conta. Preencha o campo “Titulo” e “Corpo do texto”.
          </StepText>
        </StepItem>
        <StepItem>
          <StepIcon>4</StepIcon>
          <StepText>
            Agora clique no botão “Publicar”. Pronto, o seu texto já está no ar!
          </StepText>
        </StepItem>
      </StepsItems>
    </StepsContainer>
  );
}

export default Steps;
