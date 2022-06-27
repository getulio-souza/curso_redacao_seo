import Styled from "styled-components";

export const HeaderContainer = Styled.div`
    width: 100%;
    height:80vh;  
    /* position: relative; */
`;

export const Banner = Styled.img`
   width:100%;
   height: 80vh;
   object-fit:cover;
`;

export const HeaderContent = Styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-end;
  position:absolute;
  top:50%;
  left:40%;
  font-family:inter;
`;

export const HeaderTitle = Styled.h1`
   text-align:right;
   line-height:2.5rem;
   color:#fff;
   max-width:400px;
   height: auto;
`;

export const HeaderBtn = Styled.h2`
   background-color: #fff;
   color: #000;
   width: fit-content;
   padding: 10px 30px;
   border-radius:20px;
   text-align:right;
   cursor:pointer;
`;