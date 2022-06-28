import React from "react";
import {
  DiferenciaisContainer,
  DiferenciaisTitle,
  DiferenciaisBoxes,
  DiferencialBox,
  DirencialImg,
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
          <DirencialImg src={FaHandsHelping}></DirencialImg>
          <DiferencialText>Acompanhamento personalizado</DiferencialText>
        </DiferencialBox>
        {/* diferencial 2 */}
        <DiferencialBox>
          <DirencialImg src={FaHandsHelping}></DirencialImg>
          <DiferencialText>Versatilidade na escrita</DiferencialText>
        </DiferencialBox>
        {/* diferencial 3 */}
        <DiferencialBox>
          <DirencialImg src={FaHandsHelping}></DirencialImg>
          <DiferencialText>
            Possibilidade de crescer na carreira
          </DiferencialText>
        </DiferencialBox>
        {/* diferencial 4 */}
        <DiferencialBox>
          <DirencialImg src={FaHandsHelping}></DirencialImg>
          <DiferencialText>Preço que cabe no seu bolso</DiferencialText>
        </DiferencialBox>
      </DiferenciaisBoxes>
    </DiferenciaisContainer>
  );
};

export default Diferenciais;
