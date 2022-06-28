import Styled from "styled-components";

export const HeaderContainer = Styled.div`
    width: 100%;
    height:80vh;  
    margin-bottom: 8rem;
    @media(max-width:700px){
      margin-bottom: 1rem;
    }
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
   @media(max-width:700px){
   font-size:1.5rem;
   line-height:1.8rem;
    }
`;

export const HeaderBtn = Styled.h2`
   background-color: transparent;
   border:1px solid #fff;
   color: #fff;
   width: fit-content;
   padding: 10px 30px;
   border-radius:20px;
   text-align:right;
   cursor:pointer;
   transition:.5s;
   
   @media(max-width:700px){
   padding: 5px 15px;
   }

   &:hover{
   background-color: #fff;
   color:#000;
   
}
`;