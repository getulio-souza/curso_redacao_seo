import styled from "styled-components";

export const LastTextsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: inter;
`;

export const LastTextsContainerTitle = styled.h1`
  text-align: center;
  margin-right: 20px;
`;

export const LastTextcardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const LastTextCard = styled.div`
  background-color:#000;
  color:#fff;
  width:200px;
  height:fit-content;
  padding:20px 10px;
  border-radius:10px;
`;

export const LastTextCardTitle = styled.h4``;
export const LastTextCardInfo = styled.p``;
export const LastTextCardBtn = styled.button``;
