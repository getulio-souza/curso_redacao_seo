import React from "react";
import {
  DiferenciaisContainer,
  DiferenciaisTitle,
  DiferenciaisBoxes,
  DiferencialBox,
  DirencialIcon,
  DiferencialText,
} from "./diferenciais.style";

import Icon1 from "../../assets/diferenciais/icon-1.png"
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
          <DiferencialText>Acompanhamento personalizado</DiferencialText>
        </DiferencialBox>
        {/* diferencial 2 */}
        <DiferencialBox>
          <DirencialIcon src={Icon2}></DirencialIcon>
          <DiferencialText>Versatilidade na escrita</DiferencialText>
        </DiferencialBox>
        {/* diferencial 3 */}
        <DiferencialBox>
          <DirencialIcon src={Icon3}></DirencialIcon>
          <DiferencialText>
            Possibilidade de crescer na carreira
          </DiferencialText>
        </DiferencialBox>
        {/* diferencial 4 */}
        <DiferencialBox>
          <DirencialIcon src={Icon4}></DirencialIcon>
          <DiferencialText>Preço que cabe no seu bolso</DiferencialText>
        </DiferencialBox>
      </DiferenciaisBoxes>
    </DiferenciaisContainer>
  );
};

export default Diferenciais;
