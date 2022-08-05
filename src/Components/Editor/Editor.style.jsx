import styled from "styled-components";

export const EditorContainer = styled.div`
  height:100vh;
  margin:2rem;
`;

export const EditorTitle = styled.h1`
   font-family:inter;
   text-align:center;
`;

export const EditorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 10px 0; */
  font-family: inter;
  font-weight: 700;
  border-top: 1px solid #d8d6d6;
  border-left: 1px solid #d8d6d6;
  border-right: 1px solid #d8d6d6;
  padding:20px 0;
  `;

export const EditorLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const EditorLabel = styled.label`
   margin-bottom:10px;
`;

export const EditorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const EditorInput = styled.input`
  text-align:center;
  border:none;
  width:500px;
`;

export const ButtonsContainer = styled.div`
  margin: 20px 0;
  float: right;
`;

export const BtnEditor = styled.button`
  margin-left: 10px;
  border: none;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  }
`;
