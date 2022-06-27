import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderBtn,
  Banner,
} from "./header.style";
import bannerImg from "../../assets/typing_1.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <Banner src={bannerImg}></Banner>
      <HeaderContent>
        <HeaderTitle>Aprenda redação para SEO do jeito certo!</HeaderTitle>
        <HeaderBtn>Saiba mais</HeaderBtn>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
