import React from "react";
import {
  DiferenciaisContainer,
  DiferenciaisTitle,
  DiferenciaisBoxes,
  DiferencialBox,
  DirencialIcon,
  DiferencialTitle,
  DiferencialText,
} from "./diferenciais.style";

import Icon1 from "../../assets/diferenciais/first.png"
import Icon2 from "../../assets/diferenciais/icon-2.png"
import Icon3 from "../../assets/diferenciais/icon-3.png"
import Icon4 from "../../assets/diferenciais/icon-4.png"

const Diferenciais = () => {
  return (
    <DiferenciaisContainer>
      <DiferenciaisTitle>Conheça nossos diferenciais:</DiferenciaisTitle>
      <DiferenciaisBoxes>
        {/* diferencial 1 */}
        <DiferencialBox>
          <DirencialIcon src={Icon1}></DirencialIcon>
          <DiferencialTitle>Você na primeira página do Google</DiferencialTitle>
          <DiferencialText>Ganhe relevância e seja encontrado mais facilmente pelo buscador.</DiferencialText>
        </DiferencialBox>
        {/* diferencial 2 */}
        <DiferencialBox>
          <DirencialIcon src={Icon2}></DirencialIcon>
          <DiferencialTitle>Versatilidade na escrita</DiferencialTitle>
          <DiferencialText>Desenvolva sua criatividade e aprenda a escrever para qualquer segmento de mercado.</DiferencialText>
        </DiferencialBox>
        {/* diferencial 3 */}
        <DiferencialBox>
          <DirencialIcon src={Icon3}></DirencialIcon>
          <DiferencialTitle>
            Possibilidade de crescer na carreira
          </DiferencialTitle>
          <DiferencialText>Torne-se um redator desejado pelas maiores e melhores empresas da atualidade.</DiferencialText>
        </DiferencialBox>
        {/* diferencial 4 */}
        <DiferencialBox>
          <DirencialIcon src={Icon4}></DirencialIcon>
          <DiferencialTitle>Preço que cabe no seu bolso</DiferencialTitle>
          <DiferencialText>Nossos planos são feitos de acordo com o seu momento financeiro.</DiferencialText>
        </DiferencialBox>
      </DiferenciaisBoxes>
    </DiferenciaisContainer>
  );
};

export default Diferenciais;
