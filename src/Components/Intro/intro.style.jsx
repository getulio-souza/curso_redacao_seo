import Styled from "styled-components";

export const IntroContainer = Styled.div`
   text-align:center;
   width: 100vw;
   height: 100vh;
   margin-bottom: 8rem;
   @media (max-width:900px){
      /* margin: 0 auto; */
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
   /* margin: 4rem 8rem; */
   padding: 0 5rem;
  @media (max-width:900px){
    display:grid;
    align-items:center;
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
  `;

export const SecondContentText = Styled(FirstContentText)`
`;

export const ContentImg1 = Styled.img`
   width: 500px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   @media (max-width:900px){
   max-width: 300px;
   /* margin: 0 auto;
   gap:2rem; */
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

