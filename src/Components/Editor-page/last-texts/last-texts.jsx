import React from "react";

import {
  LastTextsContainer,
    LastTextsContainerTitle,
  LastTextcardsContainer,
  LastTextCard,
  LastTextCardTitle,
  LastTextCardInfo,
  LastTextCardBtn,
} from "./last-texts.style";

function LastTexts() {
  return (
    <LastTextsContainer>
      <LastTextsContainerTitle>
        Últimos textos publicados
      </LastTextsContainerTitle>
      <LastTextcardsContainer>
        <LastTextCard>
          <LastTextCardTitle>Texto 1</LastTextCardTitle>
          <LastTextCardInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            beatae...
          </LastTextCardInfo>
          <LastTextCardBtn>Ler texto na integra</LastTextCardBtn>
        </LastTextCard>
        <LastTextCard>
          <LastTextCardTitle>Texto 2</LastTextCardTitle>
          <LastTextCardInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            beatae...
          </LastTextCardInfo>
          <LastTextCardBtn>Ler texto na integra</LastTextCardBtn>
        </LastTextCard>
        <LastTextCard>
          <LastTextCardTitle>Texto 3</LastTextCardTitle>
          <LastTextCardInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            beatae...
          </LastTextCardInfo>
          <LastTextCardBtn>Ler texto na integra</LastTextCardBtn>
        </LastTextCard>
        <LastTextCard>
          <LastTextCardTitle>Texto 4</LastTextCardTitle>
          <LastTextCardInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            beatae...
          </LastTextCardInfo>
          <LastTextCardBtn>Ler texto na integra</LastTextCardBtn>
        </LastTextCard>
        <LastTextCard>
          <LastTextCardTitle>Texto 4</LastTextCardTitle>
          <LastTextCardInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            beatae...
          </LastTextCardInfo>
          <LastTextCardBtn>Ler texto na integra</LastTextCardBtn>
        </LastTextCard>
        <LastTextCard>
          <LastTextCardTitle>Texto 4</LastTextCardTitle>
          <LastTextCardInfo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            beatae...
          </LastTextCardInfo>
          <LastTextCardBtn>Ler texto na integra</LastTextCardBtn>
        </LastTextCard>
      </LastTextcardsContainer>
    </LastTextsContainer>
  );
}

export default LastTexts;
