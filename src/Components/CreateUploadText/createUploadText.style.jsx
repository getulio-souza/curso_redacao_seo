import styled from "styled-components";

export const TextOutsideContainer = styled.div`
background-color:grey;
width: 100%;
height:100vh;
position:relative;
`;
export const InsideContainer = styled.div`
 background-color: #fff;
 width:90%;
 height:90vh;
 position:absolute;
 top:50%;
 left:50%;
 transform:translate(-50%, -50%);
 border-radius:20px;
 font-family:inter;
 padding-left:50px;
`;

export const TextInsideTitle = styled.h1`
  text-align:left;
  color:grey;
  margin:40px 0 0 10;
`;

export const InputContainer = styled.div`
 display: flex;
 flex-direction:column;
 width:500px;
`;

export const AuthorInput = styled.input`
margin:10px 0;
border:none;
`;
export const TitleLabel = styled.label`
`;
export const TitleInput = styled(AuthorInput)`
`;
