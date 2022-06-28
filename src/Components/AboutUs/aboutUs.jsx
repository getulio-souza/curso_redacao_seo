import React from "react";
import {
  AboutUsContainer,
  AboutUsTitle,
  AboutUsContent,
  AboutUsBoxContent,
  AboutUsText,
  AboutUsImg,
} from "./aboutUs.style";

import AboutUsImage from "./../../assets/people2_about.jpg";

function AboutUs() {
  return (
    <AboutUsContainer>
      <AboutUsTitle>Quem somos</AboutUsTitle>
      <AboutUsContent>
        <AboutUsBoxContent>
          <AboutUsText>
            O curso de redação para SEO foi desenvolvido por profissionais com
            vasta experiência no mercado de marketing digital.
          </AboutUsText>
          <AboutUsText>
            Queremos compartilhar nosso conhecimento, formando novos redatores
            de SEO de sucesso.
          </AboutUsText>
        </AboutUsBoxContent>
        <AboutUsImg src={AboutUsImage}></AboutUsImg>
      </AboutUsContent>
    </AboutUsContainer>
  );
}

export default AboutUs;
