import styled from "styled-components";

export const EditorPageBackground = styled.div`
  width: 100%;
  height: auto;
  background-color: #000;
`;

export const EditorPageContainer = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
  font-family: inter;
  padding-bottom: 30px;
`;

export const EditorPageTitle = styled.h1`
  color: #fff;
  margin-bottom: 50px;
  font-size: 40px;
`;
export const EditorPageBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export const EditorPageBox = styled.div`
  width: 300px;
  height: 150px;
  background-color: #fff;
  box-shadow: 1px 2px 2px #fff;
  color: #000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
  }
`;
export const EditorPageBoxTitle = styled.div`
  font-weight: 700;
  font-size: 15px;
`;
