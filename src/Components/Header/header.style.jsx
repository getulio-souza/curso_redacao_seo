import Styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = Styled.div`
    width: 100%;
    height:100vh;  
`;

export const HeaderBanner = Styled.div`
   
`

export const HeaderContent = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

export const HeaderTitle = Styled.h1`

`;

export const HeaderBtn = Styled.h2`
   background-color: #000;
   color: #fff;
   width: fit-content;
   padding: 10px 15px;
   border-radius:20px;
`;