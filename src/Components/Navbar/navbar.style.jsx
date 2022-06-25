import Styled from "styled-components";
import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.PNG"

export const NavbarContainer = Styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction:column;
    background-color: #fff;
`;

{/* container da esquerda */ }
export const LogoContainer = Styled.div`
    flex:30%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #fff;
    color: #000;
    font-weight:700;
`;

{/* container da direita */}
export const CategoryContainer = Styled.div`
    flex:70%;
    display: flex;
    align-items: center;
    padding-right:50px;
    background-color:#fff;
`;

export const Logo = Styled.img`
  margin:10px;
  max-width:280px;
  height: auto;
`;

{/* mantem o logo e os links divididos lado a lado na barra de navegação  */}
export const NavbarInnerContainer = Styled.div`
    width:100%;
    height:80px;
    display:flex;
`;

{/* Aqui fica o container que vai agrupar os links*/}
export const NavbarLinkContainer = Styled.div`
  display: flex;
  
`;

{/* links individuais */}
export const NavbarLink = Styled(Link)`
  color: #000;
  font-size: 20px;
  padding: 0 10px;
  text-align:center;
  text-decoration: none;
  margin: 0 10px;
  font-family: inter;
`;


export const NavbarExtendedContainer = Styled.div`
    
`;

export const SubscribeBtn = Styled.div`
  padding: 10px 20px;
  height:20px;
  border-radius: 20px;
  background-color: #000;
  margin:0 auto;
  font-weight:700;
  margin-left:10px;
  `;

export const SubscribeText = Styled.a`
  color:#fff;
`;