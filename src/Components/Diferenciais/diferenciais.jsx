import React from "react";
import {
  DiferenciaisContainer,
  DiferenciaisTitle,
  DiferenciaisBoxes,
  DiferencialBox,
  DirencialIcon,
  DiferencialText,
} from "./diferenciais.style";

import { FaHandsHelping } from 'react-icons/fa';

const Diferenciais = () => {
  return (
    <DiferenciaisContainer>
      <DiferenciaisTitle>Conheça nossos diferenciais:</DiferenciaisTitle>
      <DiferenciaisBoxes>
        {/* diferencial 1 */}
        <DiferencialBox>
          {/* <DirencialIcon></DirencialIcon> */}
          <DiferencialText>Acompanhamento personalizado</DiferencialText>
        </DiferencialBox>
        {/* diferencial 2 */}
        <DiferencialBox>
          
          <DiferencialText>Versatilidade na escrita</DiferencialText>
        </DiferencialBox>
        {/* diferencial 3 */}
        <DiferencialBox>
          
          <DiferencialText>
            Possibilidade de crescer na carreira
          </DiferencialText>
        </DiferencialBox>
        {/* diferencial 4 */}
        <DiferencialBox>
          
          <DiferencialText>Preço que cabe no seu bolso</DiferencialText>
        </DiferencialBox>
      </DiferenciaisBoxes>
    </DiferenciaisContainer>
  );
};

export default Diferenciais;
