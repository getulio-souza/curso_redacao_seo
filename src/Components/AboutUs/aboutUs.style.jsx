import Styled from "styled-components";

export const AboutUsContainer = Styled.div`
  text-align:center;
  margin-bottom: 8rem;
`;

export const AboutUsTitle = Styled.h2`
  font-size:2.5rem;
  @media(max-width:700px){
  font-size:2.2rem;
  }
`;

export const AboutUsContent = Styled.div`
   display:flex;
   justify-content:space-evenly;
   @media(max-width:700px){
     display: grid;
     gap: 2rem;
    }
`;

export const AboutUsBoxContent = Styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width:700px){
    margin: 0 auto;
  }
  `;

export const AboutUsText = Styled.h6`
   max-width:400px;
   font-size:1.5rem;
   font-family: inter;
   font-weight:500;
   @media(max-width:700px){
    margin:1rem 2rem;
   font-size:20px;
   }
`;

export const AboutUsImg = Styled.img`
   width: 700px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   object-fit: cover;
  @media(max-width:700px){
     max-width:90%;
     margin:0 auto;
   }
`;