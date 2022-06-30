import Styled from "styled-components";

export const ModalContainer = Styled.div`
position: absolute;
height:fit-content;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: row;
z-index: 3;
cursor: default;
`;


export const ModalLeftColumn = Styled.div`
border-radius:10px 0px 0px 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:50px;
background-color: #000;
color: #fff;
`;

export const ModalLeftColumnTitle = Styled.h1`
font-family:inter;

`;

export const ModalLeftColumnText = Styled.h4`
font-family:inter;

`;

export const ModalRightColumn = Styled.div`
border-radius:0px 10px 10px 0px;
background-color:#fff;
padding:50px;
`;

export const ModalRightColumnTitle = Styled.h2`
font-family:inter;

`;

export const ModalRightColumnImage = Styled.img`
  width:250px;
  margin-bottom:10px;
`;

export const ModalRightColumnForm = Styled.form`
`;

export const ModalRightColumnInput = Styled.input`
border-style: none;
border-bottom: 0.5px solid #D3D3D3;
text-align:center;
margin:5px;
padding:5px;
`;

export const ModalRightColumnButton = Styled.button`
 border-style: none;
 margin-top: 10px;
 padding:10px 30px;
 border-radius:10px;
 background-color: #000;
 color: #fff;
 font-weight:700;
 transition:.5s;
 cursor: pointer;
 &:hover{
    background-color:transparent;
    border:1px solid #000;
    color:#000;
 }
`;

export const ModalCloseBtn = Styled.img`
 width: 20px;
  font-family: inter;
  font-size:2rem;
  color: #000;
  position:absolute;
  top:0;
  right:0;
  margin: 20px;
  z-index:5;
  transition:.5s;
  cursor: pointer;
  &:hover{
    color: red;
  }
`;
