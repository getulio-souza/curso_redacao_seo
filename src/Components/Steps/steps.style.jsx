import Styled from "styled-components";

export const StepsContainer = Styled.div`
  text-align:center;
  margin-top:10rem;
  margin-bottom: 8rem;
  width:100%;
  height:50vh;
  @media(max-width:900px){
    margin-bottom:2rem;
    height:fit-content;
  }
`;

export const StepsTitle = Styled.h2`
   font-size: 2.5rem;
   margin-bottom: 4rem;
   font-family: inter;
   @media(max-width:700px){
  font-size:2.2rem;
  }
`;

export const StepsItems = Styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-bottom:3rem;
   @media(max-width:900px){
    display: grid;
    gap: 2rem;
   }
`;

export const StepItem = Styled.div`
  cursor: default;
  transition:.5s;
  &hover{
    transform: translateY(5px);
  }
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
  @media(max-width:700px){
     font-size: 1rem;
   }
`;

export const CTABtn = Styled.button`
  margin-bottom: 4rem;
  padding: 20px 40px; 
  border-radius: 20px;
  background-color: yellow;
  border:1px solid #000;
  color: #000;
  margin:0 auto;
  font-weight:700;
  margin-left:10px;
  transition: .5s;
  cursor:pointer;
  transition:.5s;
  &:hover{
  background-color: #000;
  color:#fff;
  }
`;