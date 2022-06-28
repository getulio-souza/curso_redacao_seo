import Styled from "styled-components";

export const StepsContainer = Styled.div`
  text-align:center;
  margin-bottom: 8rem;
  width:100%;
  height:50vh;
`;

export const StepsTitle = Styled.h2`
   font-size: 2.5rem;
   margin-bottom: 4rem;
   font-family: inter;
`;

export const StepsItems = Styled.div`
   display: flex;
   justify-content: space-evenly;
`;

export const StepItem = Styled.div`

`;

export const StepIcon = Styled.div`
  background-color:#000;
  padding:30px;
  color:#fff;
  max-width:10px;
  border-radius:100%;
  margin:0 auto;
  font-family: inter;
  font-weight:700;
  text-align:center;
`;

export const StepText = Styled.h6`
  color:#000;
  font-size:1.5rem;
  padding:0 20px;
  max-width:300px;
  margin:20px auto;
  font-family: inter;
`;