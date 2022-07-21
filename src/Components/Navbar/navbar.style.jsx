import Styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = Styled.nav`
    width: 100%;
    height: ${(props)=> (props.ExtendNavbar ? "100vh" : "80px")};
    display: flex;
    flex-direction:column;
    background-color: #fff;

    @media (min-width:900px){
      height:80px;
    }
`;

//38:57

{/* container da esquerda */}
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

{/* container da direita */}
export const CategoryContainer = Styled.div`
    display: flex;
    align-items: center;
    padding-right:50px;
    background-color:#fff;
   @media(max-width:900px){
     display:none;
   }
`;

{/* Menu mobile button */}
export const OpenLinksBtn = Styled.button`
      background-color: transparent;
      color:#000;
      border:none;
      width:70px;
      height:50px;
      font-weight:700;
      font-size: 45px;
      cursor: pointer;
      transition: .5s;
      z-index:1;
  @media(min-width:900px){
    display:none;
  }
`;

export const NavbarInnerContainer = Styled.div`
    width:100%;
    height:80px;
    display:flex;
`;

{/* Aqui fica o container que vai agrupar os links*/}
export const NavbarLinkContainer = Styled.div`
  display: flex;
`;

export const NavbarLink = Styled.a`
  color: #000;
  font-size: 15px;
  padding: 10px;
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
  {responsivo}
  @media (max-width:900px){
    display: none;
  }
`;

export const NavbarLinkSubscribe = Styled.button`
  width:fit-content;
`;


export const NavbarLinkExtended = Styled(Link)`
  /* position:relative; */
  color: #000;
  font-size: 20px;
  padding: 10px;
  text-align:center;
  text-decoration: none;
  margin: 5px 10px;
  font-family: inter;
  transition:.5s;
  border-radius:10px;
  cursor:pointer;
  &:after{
    content:"";
    position:absolute;
    background-color:#000;
    height:3px;
    width:0;
    left:0;
    bottom:-10px;
    transition:0.3s;
  }
  &:hover:after{
    width:100%;
  }
`;

{/* menu mobile */}
export const NavbarExtendedContainer = Styled.div`
    color:#000;
    display: flex;
    flex-direction:column;
    margin:10rem auto;
    z-index:1;
    @media(min-width:900px){
      display: none;
    }
`;

export const SubscribeBtnExtended = Styled.div`
  margin-top:5px;
  padding: 15px 20px;
  height:20px;
  border-radius: 20px;
  color:#fff;
  font-weight:700;
 @media(min-width:900px){
      display: none;
    }
`;

export const LoginBtnExtended = Styled(SubscribeBtnExtended)`
text-align:center;
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
  text-align:center;
  background-color: transparent;
  color:#000;
  margin:0 auto;
  font-size:20px;
  font-weight:700;
  margin-left:10px;
  transition: .5s;
  border-style: none;
  cursor:pointer;
  transition:.5s;
`;

export const SubscribeTextExtended = Styled.a`
  color:#fff;
`;

export const Modal = Styled.div`
  text-align:center;
`;

export const ModalLogin = Styled(Modal)``;