import styled from "styled-components";

export const TextOutsideContainer = styled.div`
background-color:grey;
width: 100%;
height:100vh;
position:relative;
`;
export const TextInsideContainer = styled.div`
 background-color: #fff;
 width:90%;
 height:90vh;
 position:absolute;
 top:50%;
 left:50%;
 transform:translate(-50%, -50%);
 border-radius:20px;
 font-family:inter;
`;
export const TextInsideTitle = styled.h1`
  text-align:left;
  color:grey;
  margin:40px 0 0 10;
`;
// export const CreateUploadTextContainer = styled.div`

// `;