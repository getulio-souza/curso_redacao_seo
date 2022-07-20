import styled from "styled-components";

export const LoginModalContainer = styled.div`
background-color:#fff;
padding:20px 40px;
position: fixed;
height:fit-content;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
text-align: center;
z-index: 3;
font-family:inter;
box-shadow: 2px 5px 10px #000;
border-radius: 10px;
cursor: default;
@media(max-width:900px){
  display: grid;
  position: absolute;
  width: 100%;
  height:100vh;
}
`;


export const LoginModalTitle = styled.h2`
  padding-top:30px;
  font-size:20px;
`;

export const LoginModalTitleUnderline = styled.div`
 width:100px;
 height:1px;
 background-color:#000;
 margin:0 auto;
`;

export const LoginAndPasswordContainer = styled.div`
  text-align:center;
`;

export const LoginUser = styled.div`
`;
export const LoginModalUser = styled.div``;

export const InfoTitle = styled.h4`
 font-size:15px;
 margin-bottom:10px;
`;
export const InfoInput = styled.input`
  background-color: transparent;
  color:grey;
  border:none;
  text-align:center;
`;
export const PasswordUser = styled.div``;
export const PasswordModalUser = styled.div``;


export const ForgetPassword = styled.p`
 color:grey;
 text-align:center;
 font-size:13px;
 text-decoration:underline;
 padding:10px 0;
`;
export const LoginBtn = styled.button`
 font-family:inter;
 font-weight:900;
 background-color:transparent;
 border:1px solid #000;
 color:#000;
 padding:7px;
 border-radius:20px;
 cursor:pointer;
 transition:.5s;
 &:hover{
  background-color:#000;
 color:#fff;
 }
`;

export const SusbcribeLinkContainer = styled.div`
  font-size:12px;
`;

export const SubscribeText = styled.p``;

export const SusbcribeLinkCTA = styled.button`
  font-size:12px;
  font-weight:900;
  background-color:transparent;
  text-decoration:underline;
  border:none;
  cursor:pointer;
  transition:.5s;
  &:hover{
  }
`;

export const ModalCloseLoginBtn = styled.div`
  width: 20px;
  font-family: inter;
  font-size:1.5em;
  font-weight:900;
  color: #000;
  position:absolute;
  top:0;
  right:0;
  margin: 20px;
  z-index:5;
  transition:.5s;
  cursor: pointer;
  @media (max-width:900px){
   color:#fff;
  }
  &:hover{
    color: red;
  }
`;
