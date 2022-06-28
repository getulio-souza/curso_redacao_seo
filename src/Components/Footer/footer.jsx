import React from "react";
import {
    FooterContainer,
    FooterIntro,
    FooterLogo,
    FooterText,
    FooterSocialIcons,
    FooterCategories,
    FooterCategoryTitle,
    FooterCategory,
} from "./footer.style";

import FooterLogoImg from "../../assets/logo-3.JPG"

function Footer() {
  return (
      <FooterContainer>
          {/* primeira parte */}
          <FooterIntro>
          <FooterLogo src={FooterLogoImg}></FooterLogo>
          <FooterText>Este site foi criado para democratizar a formação de produtores de conteúdo para SEO que desejam se especializar na área.</FooterText>
          <FooterSocialIcons>
              <li>facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
      </FooterSocialIcons>
          </FooterIntro>
          {/* Categorias */}
          <FooterCategories>
              <FooterCategoryTitle>Categorias</FooterCategoryTitle>
              <FooterCategory></FooterCategory>
              <FooterCategory></FooterCategory>
              <FooterCategory></FooterCategory>
              <FooterCategory></FooterCategory>
          </FooterCategories>
    </FooterContainer>
  );
}

export default Footer;
