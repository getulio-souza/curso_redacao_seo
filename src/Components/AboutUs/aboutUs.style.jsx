import Styled from "styled-components";

export const AboutUsContainer = Styled.div`
  text-align:center;
  margin-bottom: 8rem;
  `;

export const AboutUsTitle = Styled.h2`
  font-family: inter;
  font-size:2.5rem;
  @media(max-width:700px){
     font-size:2.2rem;
  }
`;

export const AboutUsContent = Styled.div`
   display:flex;
   justify-content:space-evenly;
   align-items:center;
   @media(max-width:900px){
     display: flex;
     flex-direction:column;
    }
`;

export const AboutUsBoxContent = Styled.div`
@media(max-width:900px){
    margin-bottom: 1rem;
   }
`;

export const AboutUsText = Styled.h4`
   max-width:400px;
   font-size:20px;
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