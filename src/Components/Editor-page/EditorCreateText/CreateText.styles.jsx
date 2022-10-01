import styled from "styled-components";

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin: 2rem;
  @media (min-width: 900px) {
    max-width: 800px;
    margin: 3rem auto;
  }
`;

export const EditorTitle = styled.h1`
  font-family: inter;
  text-align: center;
  margin: 0 10px;
  padding-bottom: 20px;
  font-size: 40px;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
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
  padding: 40px 0;
  max-width: 470px;
`;

export const EditorLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const EditorLabel = styled.label`
  margin-bottom: 10px;
  font-size: 25px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const EditorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const EditorInput = styled.input`
  font-size: 15px;
  text-align: center;
  border: none;
  width: 500px;
  @media (max-width: 700px) {
    width: 350px;
    font-size: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 20px 0;
  float: right;
  @media (min-width: 900px) {
    /* margin-top:20px; */
  }
`;

export const BtnEditor = styled.button`
  margin-left: 10px;
  border: none;
  background-color: #000;
  font-size: 20px;
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
