import Styled from "styled-components";

export const FooterContainer = Styled.div`
  width:100%;
  height:500px;
  background-color: #000000;
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  justify-items:center;
  align-items:center;
  /* margin-bottom:4rem; */

  @media(max-width:700px){
  display:grid;
  grid-template-columns:1fr;
  height: fit-content;
  padding-bottom:30px;
  }
`;

export const FooterIntro = Styled.div`
 margin:0 auto;
 padding: 20px;
 @media(max-width:700px){
    text-align:center;
    margin-bottom:2rem;
 }
`;

export const FooterLogo = Styled.img`
  margin:2rem 0;
  max-width:180px;
  height: auto;
  
`;

export const FooterText = Styled.div`
  color:#fff;
  max-width:280px;
  padding:0 10px;
  font-family:inter;
  font-size: 15px;
  margin-bottom: 2rem;
`;

export const FooterSocialIcons = Styled.div`
  display: flex;
  justify-content:start;
  gap: 1rem;
  list-style-type: none;
  color:#fff;
  margin-top: 20px;
  padding:0 10px;
  @media(max-width:700px){
    margin-bottom:1rem;
    justify-content:center;
  }
`;

export const FooterSocialIcon = Styled.img`
 background-color:#fff;
 border-radius:20px;
 width:40px;
 transition:.5s;
 cursor:pointer;
 &:hover{
    transform:translateY(2px);
    opacity:0.7;
 }
`;

export const FooterCategories = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  @media(max-width:700px){
    margin-bottom:2rem;
  }
`;

export const FooterCategoryTitle = Styled.div`
font-size:25px;
font-weight:900;
margin-bottom:15px;
  color:#fff;
`;

export const FooterCategory = Styled.div`
font-size:15px;
color:#fff;
line-height:2rem;
font-weight:700;
transition:.5s;
cursor:pointer;

&:hover{
    transform: translateX(15px);
}
`;

export const FooterCategoryBtn = Styled.button`
  margin-top: 10px;
  background-color:#fff;
  font-weight:700;
  padding:7px 15px;
  border-radius:10px;
  cursor:pointer;
  &:hover{
    background-color:transparent;
    color:#fff;
  }
`;

export const FooterFormContainer = Styled.div`
   max-width:200px;
`;

export const FooterForm = Styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
`;

export const FooterFormTitle = Styled.h4`
   color:#fff;
   font-size:25px;
   width:fit-content;
   @media(max-width:700px){
    text-align:center;
   }
`;

export const FooterFormLabel = Styled.input`
   padding:5px;
   width:200px;
   background-color:#fff;
   border-radius: 5px;
`;

export const FooterFormBtn = Styled.div`
   background-color: #fff;
   color:#000;
   font-weight:700;
   text-align:center;
   border:1px solid #fff;
   padding:10px;
   transition:.5s;
   border-radius: 5px;
   cursor:pointer;
   &:hover{
    background-color:transparent;
    color:#fff;
   }
`;

export const FooterLabelTextArea = Styled.textarea`
   width:206px;
   border-radius: 5px;

`;