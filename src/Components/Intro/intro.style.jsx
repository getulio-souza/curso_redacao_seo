import Styled from "styled-components";

export const IntroContainer = Styled.div`
   width: 100vw;
   height: 100vh;
   margin-bottom: 8rem;
   @media (max-width:700px){
      height:fit-content;
   }
`;

export const FirstContent = Styled.div`
   display: flex;
   gap: 4rem;
   justify-content: center;
   align-items: center;
   margin: 4rem 8rem;
  @media (max-width:700px){
    display:grid;
  } 
   `;

export const SecondContent = Styled(FirstContent)``;

export const FirstContentText = Styled.h4`
  text-align:center;
  font-size:20px;
  font-weight:500;
  line-height:1.7rem;
  font-family: inter;
  display: block;
  @media (max-width:700px){
   margin-bottom:-1rem;
  }
  `;

export const SecondContentText = Styled(FirstContentText)`
`;

export const FirstContentImg = Styled.img`
   width: 500px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   @media (max-width:700px){
      width:250px;
   }
   
  `;

export const SecondContentImg = Styled(FirstContentImg)``;


