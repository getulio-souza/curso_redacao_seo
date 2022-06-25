import React from 'react'
import Banner from "../../assets/banner.jpg"
import { HeaderContainer, HeaderBanner, HeaderContent, HeaderTitle, HeaderBtn } from './header.style';

const Header = () => {
  return (
      <HeaderContainer>
          {/* Banner */}
          <HeaderBanner src={Banner}>
          {/* Content */}
          <HeaderContent>
              <HeaderTitle>Aprenda redação para SEO do jeito certo!</HeaderTitle>
              <HeaderBtn>Saiba mais</HeaderBtn>
          </HeaderContent>
          </HeaderBanner>
    </HeaderContainer>
  )
}

export default Header