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
  text-align: start;
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
  width:220px;
  height:auto;
  padding:20px 10px;
  border-radius:10px;
`;

export const LastTextCardTitle = styled.h4`
   margin:15px 0;
`;

export const LastTextCardInfo = styled.p`
  font-size:12px;
`;

export const LastTextCardBtn = styled.button`
  border:none;
  padding:5px 10px;
  border-radius:10px;
  background-color:#fff;
  color:#000;
  transition: 0.5s;
  cursor:pointer;
  &:hover{
    background-color:transparent;
    border:1px solid #fff;
    color:#fff;
  }
`;
