import Styled from "styled-components";

export const IntroContainer = Styled.div`
   width: 100vw;
   height: 100vh;
   /* background-color: red; */
   display:flex;
   flex-direction: column;
`;

export const FirstContent = Styled.div`
   display: flex;
   gap: 4rem;
   justify-content: center;
   align-items: center;
   margin: 4rem 8rem;
   `;

export const SecondContent = Styled(FirstContent)``;

export const FirstContentText = Styled.h4`
  text-align:center;
  font-size:20px;
  font-weight:700;
  line-height:1.7rem;
  font-family: inter;
  display: block;
  `;

export const SecondContentText = Styled(FirstContentText)``;

export const FirstContentImg = Styled.img`
   width: 500px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
  `;

export const SecondContentImg = Styled(FirstContentImg)``;


