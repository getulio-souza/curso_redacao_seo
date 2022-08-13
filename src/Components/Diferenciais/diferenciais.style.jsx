import Styled from "styled-components";

export const DiferenciaisContainer = Styled.div`
   text-align:center;
   width:100%;
   @media(min-width:1400px){
      margin: 10rem auto;
   }
`;
export const DiferenciaisTitle = Styled.h3`
   font-size: 2.5rem;
   margin: 4rem 0;
   font-family: inter;
   @media(max-width:700px){
  font-size:2.2rem;
  margin-left:7px;
  margin-right: 7px;
  }
`;
export const DiferenciaisBoxes = Styled.div`
   display: flex;
   justify-content: space-evenly;
   gap:2rem;
   padding:0 20px;
   @media(max-width:900px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap:2rem;
   }
   @media(max-width:700px){
      display: grid;
      grid-template-columns:1fr;
   }

`;
export const DiferencialBox = Styled.div`
   background-color: #000;
   color:#fff;
   padding: 2px 40px;
   max-width:600px;
   font-family: inter;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   transition:.5s;
   &:hover{
    transform: translateY(-10px);
    background-color:transparent;
    color:#000;
    /* border:1px solid #000; */
   }
`;
export const DirencialIcon = Styled.img`
  padding-top:20px;
  width:50px;
`;
export const DiferencialTitle = Styled.h4`
  font-size: 1.2rem;
  font-weight: 900;
`;

export const DiferencialText = Styled.h6`
  font-size: 0.9rem;
  line-height:1.5rem;
`;