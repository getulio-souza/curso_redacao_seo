import Styled from "styled-components";

export const ModalContainer = Styled.div`
position: fixed;
height:fit-content;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: row;
z-index: 100;
box-shadow: 2px 5px 7px #111010;
border-radius: 10px;
cursor: default;
font-family:inter;

@media(max-width:900px){
  display: flex;
  flex-direction: column;
  position: absolute;
  width:80vw;
}
`;

export const ModalLeftColumn = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:50px;
background-color: #000;
color: #fff;
`;

export const ModalLeftColumnTitle = Styled.h1`
  margin:10px;
`;

export const ModalLeftColumnText = Styled.h4`
`;

export const ModalRightColumn = Styled.div`
background-color:#fff;
padding:50px;
@media(max-width:900px){
padding:20px;
}
`;

export const ModalRightColumnTitle = Styled.h2`
font-family:inter;
`;

export const ModalRightColumnImage = Styled.img`
  width:250px;
  margin-bottom:10px;
`;

export const ModalRightColumnForm = Styled.form`
 display: grid;
 grid-template-columns: 1fr 1fr;
 @media(max-width:900px){
  grid-template-columns: 1fr;
 }
`;

export const ModalRightColumnInput = Styled.input`
border-style: none;
border-bottom: 0.5px solid #D3D3D3;
text-align:center;
margin:10px;
padding:5px;
font-size: 10px;
`;

export const ModalRightColumnButton = Styled.button`
 border-style: none;
 margin-top: 20px;
 padding:10px 30px;
 border-radius:10px;
 background-color: #000;
 color: #fff;
 font-size:15px;
 font-weight:700;
 transition:.5s;
 cursor: pointer;
 &:hover{
    background-color:transparent;
    border:1px solid #000;
    color:#000;
 }
`;

export const ModalCloseBtn = Styled.div`
  width: 20px;
  font-family: inter;
  font-size:1.5em;
  font-weight:900;
  color: #000;
  position:absolute;
  top:0;
  right:0;
  margin: 20px;
  z-index:101;
  transition:.5s;
  cursor: pointer;
  @media (max-width:900px){
   color:#fff;
  }
  &:hover{
    color: red;
  }
`;
