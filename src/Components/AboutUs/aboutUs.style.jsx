import Styled from "styled-components";

export const AboutUsContainer = Styled.div`
  text-align:center;
  margin-bottom: 8rem;
`;

export const AboutUsTitle = Styled.h2`
  font-size:2.5rem;
`;

export const AboutUsContent = Styled.div`
   display:flex;
   justify-content:space-evenly;
`;

export const AboutUsBoxContent = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutUsText = Styled.h6`
   max-width:400px;
   font-size:1.5rem;
   
`;

export const AboutUsImg = Styled.img`
   width: 700px;
   height:auto;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   object-fit: cover;
`;