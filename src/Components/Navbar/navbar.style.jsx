import Styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = Styled.nav`
    width: 100%;
    height: ${(props) => (props.ExtendNavbar ? "100vh" : "80px")};
    display: flex;
    flex-direction:column;
    background-color: #fff;

    @media (min-width:700px){
      height:80px;
    }
`;

{
  /* container da esquerda */
}
export const LogoContainer = Styled.div`
    flex:30%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #fff;
    color: #000;
    font-weight:700;
`;

export const Logo = Styled.img`
  margin:10px;
  max-width:280px;
  height: auto;
  @media (max-width:700px){
    max-width: 200px;
  }
`;

{
  /* container da direita */
}
export const CategoryContainer = Styled.div`
    display: flex;
    align-items: center;
    padding-right:50px;
    background-color:#fff;
   @media(max-width:800px){
     display:none;
   }
`;

{/* Menu mobile */}
export const OpenLinksBtn = Styled.button`
   background-color: transparent;
   color:#000;
   font-weight:700;
   border:none;
   font-size: 45px;
   cursor: pointer;
   transition: .5s;
  @media (min-width:700px){
    display: none;
  }
`;

{/* mantem o logo e os links divididos lado a lado na barra de navegação */}
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
export const NavbarLink = Styled.a`
  color: #000;
  font-size: 20px;
  padding: 0 10px;
  text-align:center;
  text-decoration: none;
  margin: 0 10px;
  font-family: inter;
  transition: .5s;
  cursor:pointer;
  &:hover{
  transform: translateY(-5px);
  font-weight:700;
 }
  {/* responsivo */}
  @media (max-width:700px){
    display: none;
  }
`;
export const NavbarLinkExtended = Styled(Link)`
  color: #fff;
  font-size: 20px;
  padding: 5px 10px;
  text-align:center;
  text-decoration: none;
   margin: 5px 10px;
  font-family: inter;
`;

export const NavbarExtendedContainer = Styled.div`
    width:100%;
    height:100vh;
    background-color:#000;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:3;

    @media(min-width:700px){
      display: none;
    }
`;

export const SubscribeBtnExtended = Styled.div`
  margin-top:5px;
  padding: 15px 20px;
  height:20px;
  border-radius: 20px;
  background-color: #fff;
  font-weight:700;
 @media(min-width:700px){
      display: none;
    }
`;

export const SubscribeBtn = Styled.button`
  padding: 10px 20px; 
  border-radius: 20px;
  background-color: transparent;
  border:1px solid #000;
  color: #000;
  margin:0 auto;
  font-weight:700;
  margin-left:10px;
  transition: .5s;
  cursor:pointer;
  transition:.5s;
  &:hover{
    background-color: yellow;
  color: #fff;
  }

  {/* responsivo */}
  @media (max-width:700px){
    display: none;
  } 
  `;

{/* login button */}
export const LoginBtn = Styled.button`
  border:1px solid #000;
  background-color: transparent;
  padding: 10px 20px; 
  border-radius: 20px;
  margin:0 auto;
  font-weight:700;
  margin-left:10px;
  transition: .5s;
  border-style: none;
  cursor:pointer;
  transition:.5s;
  &:hover{
    background-color:orange;
  }
`;

export const SubscribeTextExtended = Styled.a`
  color:#fff;
`;

export const Modal = Styled.div`
  text-align:center;
`;