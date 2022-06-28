import Styled from "styled-components";

export const DiferenciaisContainer = Styled.div`
   text-align:center;
   margin-bottom: 8rem;
   width:100%;
`;
export const DiferenciaisTitle = Styled.h3`
   font-size: 2.5rem;
   margin-bottom: 4rem;
   font-family: inter;
`;
export const DiferenciaisBoxes = Styled.div`
   display: flex;
   justify-content: space-evenly;
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
export const DirencialImg = Styled.img`
  font-size:30px;
  margin-top:10px;
`;
export const DiferencialText = Styled.h6`
  font-size: 1rem;
  font-family: inter;
  font-weight: 900;
  color:#fff;
`;