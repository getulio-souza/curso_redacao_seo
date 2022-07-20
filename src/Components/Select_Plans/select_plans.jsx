import React from "react";
import {
    SelectContainer,
    SelectContainerHeader,
    SelectTitle, 
    SelectSubTitle,
    SelectPlansContainer, 
    SelectPlanCard,
    SelectPlanHeader,
    SelectPlanTitle,
    SelectPlanImg,
    SelectPlanPrice,
    SelectPlanListContainer,
    SelectPlanList,
    SelectPlanListIcon,
    SelectPlanListText,
    SelectPlanBtn,
} from "./select_plans.style";

import Free from "../../assets/svgs/free.png"
import Basic from "../../assets/svgs/basic.png"
import Professional from "../../assets/svgs/professional.png"

function SelectPlans() {
  return (
      <SelectContainer>
     {/* Header */}
      <SelectContainerHeader>
        <SelectTitle>Conheça nossos planos</SelectTitle>
        <SelectSubTitle>
          Criamos as melhores opções para atender às suas necessidades como
          redator. 
        </SelectSubTitle>
          </SelectContainerHeader>
          
          <SelectPlansContainer>
        {/* Card */}
        <SelectPlanCard>
          <SelectPlanHeader>
            <SelectPlanTitle>Gratuito</SelectPlanTitle>
            <SelectPlanImg src={Free}></SelectPlanImg>
            <SelectPlanPrice>Gratis / Mês</SelectPlanPrice>
                  </SelectPlanHeader>
                  
          {/*card list */}
          <SelectPlanListContainer>
            <SelectPlanList>
              <SelectPlanListText>5 textos publicados</SelectPlanListText>
            </SelectPlanList>
            <SelectPlanList>
              <SelectPlanListText>1.000 palavras</SelectPlanListText>
            </SelectPlanList>
            <SelectPlanList>
              <SelectPlanListText>Sem revisão ortográfica</SelectPlanListText>
            </SelectPlanList>
                  </SelectPlanListContainer>
                  <SelectPlanBtn>Selecionar</SelectPlanBtn>
              </SelectPlanCard>
              
        {/* Card */}
        <SelectPlanCard>
          <SelectPlanHeader>
            <SelectPlanTitle>Básico</SelectPlanTitle>
            <SelectPlanImg src={Basic}></SelectPlanImg>
            <SelectPlanPrice>R$9,00 / Mês</SelectPlanPrice>
                  </SelectPlanHeader>
                  
          {/*card list */}
          <SelectPlanListContainer>
            <SelectPlanList>
              <SelectPlanListText>10 textos publicados</SelectPlanListText>
            </SelectPlanList>
            <SelectPlanList>
              <SelectPlanListText>5.000 palavras</SelectPlanListText>
            </SelectPlanList>
            <SelectPlanList>
              <SelectPlanListText>Revisão ortográfica inclusa</SelectPlanListText>
            </SelectPlanList>
                  </SelectPlanListContainer>
                  <SelectPlanBtn>Selecionar</SelectPlanBtn>
              </SelectPlanCard>
              
        {/* Card */}
        <SelectPlanCard>
          <SelectPlanHeader>
            <SelectPlanTitle>Completo</SelectPlanTitle>
            <SelectPlanImg src={Professional}></SelectPlanImg>
            <SelectPlanPrice>R$200 / Ano</SelectPlanPrice>
                  </SelectPlanHeader>
                  
          {/*card list */}
          <SelectPlanListContainer>
            <SelectPlanList>
              <SelectPlanListText>20 textos (por mês)</SelectPlanListText>
            </SelectPlanList>
            <SelectPlanList>
              <SelectPlanListText>10 mil palavras (por mês)</SelectPlanListText>
            </SelectPlanList>
            <SelectPlanList>
              <SelectPlanListText>Sem revisão ortográfica</SelectPlanListText>
            </SelectPlanList>
            {/* <SelectPlanList>
              <SelectPlanListText>Chamada de vídeo ao vivo</SelectPlanListText>
            </SelectPlanList> */}
                  </SelectPlanListContainer>
                  <SelectPlanBtn>Selecionar</SelectPlanBtn>
              </SelectPlanCard>
      </SelectPlansContainer>
    </SelectContainer>
  );
}

export default SelectPlans;
