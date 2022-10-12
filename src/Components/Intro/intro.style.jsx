import Styled from "styled-components";

export const IntroContainer = Styled.div`
   text-align:center;
   width: 100vw;
   height: fit;
   margin-bottom: 8rem;
   @media (max-width:900px){
      margin-bottom: 4rem;
      height:fit-content;
   }
`;

export const FirstContent = Styled.div`
   display: flex;
   justify-content: center;
   align-items:center;
   gap: 4rem;
   margin-bottom:4rem;
   padding: 0 5rem;
@media (max-width:900px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  } 
`;

export const SecondContent = Styled(FirstContent)``;

export const FirstContentText = Styled.h4`
  text-align:center;
  font-size:15px;
  font-weight:500;
  line-height:1.4rem;
  font-family: inter;
  display: block;
  `;

export const SecondContentText = Styled(FirstContentText)`
`;

export const ContentImg1 = Styled.img`
   width: 500px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   @media(max-width:700px){
      width:300px;
      margin-right:20px;
   }
  `;

export const ContentImg2 = Styled.img`
   width: 500px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   @media (max-width:900px){
   display: none;
   }
  `;

