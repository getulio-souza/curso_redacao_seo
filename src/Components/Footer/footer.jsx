import React from "react";
import {
  FooterContainer,
  FooterIntro,
  FooterLogo,
  FooterText,
  FooterSocialIcons,
  FooterSocialIcon,
  FooterCategories,
  FooterCategoryTitle,
  FooterCategory,
  FooterCategoryBtn,
  FooterFormContainer,
  FooterForm,
  FooterFormTitle,
  FooterFormLabel,
  FooterLabelTextArea,
  FooterFormBtn,
} from "./footer.style";

import FooterLogoImg from "../../assets/logo-3.JPG";
import FacebookIcon from "../../assets/social/facebook.png";
import InstagramIcon from "../../assets/social/instagram.png";
import TwitterIcon from "../../assets/social/twitter.png";
import YoutubeIcon from "../../assets/social/youtube.png";

function Footer() {
  return (
    <FooterContainer>
      <FooterIntro>
        <FooterLogo src={FooterLogoImg}></FooterLogo>
        <FooterText>
          Este site foi criado para democratizar a formação de produtores de
          conteúdo para SEO que desejam se especializar na área.
        </FooterText>
        <FooterSocialIcons>
          <FooterSocialIcon src={FacebookIcon}></FooterSocialIcon>
          <FooterSocialIcon src={InstagramIcon}></FooterSocialIcon>
          <FooterSocialIcon src={TwitterIcon}></FooterSocialIcon>
          <FooterSocialIcon src={YoutubeIcon}></FooterSocialIcon>
        </FooterSocialIcons>
      </FooterIntro>

      {/* Categorias */}
      <FooterCategories>
        <FooterCategoryTitle>Categorias</FooterCategoryTitle>
        <FooterCategory>Como funciona</FooterCategory>
        <FooterCategory>Quem Somos</FooterCategory>
        <FooterCategory>Contato</FooterCategory>
        <FooterCategory>
          <FooterCategoryBtn>Inscreva-se</FooterCategoryBtn>
        </FooterCategory>
      </FooterCategories>

      {/* form */}
      <FooterFormContainer>
              <FooterFormTitle>Entre em contato com a gente</FooterFormTitle>
              <FooterForm>
              <FooterFormLabel placeholder="Nome"></FooterFormLabel>
              <FooterFormLabel placeholder="Telefone/Celular"></FooterFormLabel>
                  <FooterFormLabel placeholder="E-mail"></FooterFormLabel>
                  <FooterLabelTextArea placeholder="Digite sua mensagem"></FooterLabelTextArea>
              <FooterFormBtn>Enviar</FooterFormBtn>
              </FooterForm>
      </FooterFormContainer>
    </FooterContainer>
  );
}

export default Footer;
