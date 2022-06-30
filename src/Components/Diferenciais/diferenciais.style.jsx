import Styled from "styled-components";

export const DiferenciaisContainer = Styled.div`
   text-align:center;
   margin-top: 8rem;
   margin-bottom: 8rem;
   width:100%;
`;
export const DiferenciaisTitle = Styled.h3`
   font-size: 2.5rem;
   margin-bottom: 4rem;
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
   @media(max-width:700px){
      display: grid;
      gap:2rem;
   }
`;
export const DiferencialBox = Styled.div`
   background-color: #000;
   padding: 2px 30px;
   border-radius: 20px;
   box-shadow: 2px 5px 7px #000;
   transition:.5s;
   &:hover{
    transform: translateY(-10px);
   }
`;
export const DirencialIcon = Styled.i`
  font-size:30px;
  margin-top:10px;
`;
export const DiferencialText = Styled.h6`
  font-size: 1rem;
  font-family: inter;
  font-weight: 900;
  color:#fff;
`;