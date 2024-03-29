import styled from "styled-components";

export const LastTextsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: inter;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin: 40px 0;
  }
  @media screen and (max-width: 700px) {
    height: 100vh;
  }
`;

export const LastTextsContainerTitle = styled.h1`
  text-align: start;
  margin-right: 20px;
  /* @media screen and (max-width: 900px) {
    text-align: center;
  } */
`;

export const LastTextcardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-bottom: 40px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const LastTextCard = styled.div`
  background-color: #000;
  color: #fff;
  width: 220px;
  height: auto;
  padding: 20px 10px;
  border-radius: 10px;
`;

export const LastTextCardTitle = styled.h4`
  margin: 15px 0;
`;

export const LastTextCardInfo = styled.p`
  font-size: 12px;
  text-align: justify;
`;

export const LastTextCardBtn = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  transition: 0.5s;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;
