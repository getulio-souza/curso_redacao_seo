import Styled from "styled-components";

export const WelcomeContainer = Styled.div`
  max-width:600px;
  height:100vh;
  text-align:center;
  margin: 0 auto;
  margin-bottom: 8rem;
  padding-bottom:4rem;
  @media(max-width:900px){
  height:fit-content;
  padding-bottom:2rem;
  }
`;

export const WelcomeTitle = Styled.h2`
  font-size:2.5rem;
  font-family:inter;
   margin-bottom: 4rem;
  @media(max-width:700px){
  font-size:2.2rem;
  }
`;

export const WelcomeImg = Styled.img`
   width: 500px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   @media(max-width:700px){
    max-width:90%;
    margin:0 auto;
   }
`;

export const WelcomeContent = Styled.h5`
  margin: 2rem;
  font-size:1.5rem;
  font-weight:500;
  font-family:inter;
  @media(max-width:700px){
  font-size:20px;
  }
`;
