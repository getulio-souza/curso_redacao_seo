import styled from "styled-components";

export const TableTextContainer = styled.table`
  text-align: center;
  margin: 0 auto;
  font-family: inter;
  border: 1px solid #e1d7d7;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px #000;
`;

export const TableTextRow = styled.tr``;

export const TabletextHead = styled.th`
  padding: 5px 10px;
  color: #e1d7d7;
  font-weight: 700;
  font-size: 13px;
`;

export const TableTextData = styled.td`
  padding: 2px 10px;
  color: #8a8888;
  font-size: 11px;
`;

export const TableActionBtn = styled.button`
  font-size: 10px;
  background-color: transparent;
  border: 1px solid #e1d7d7;
  padding: 5px 20px;
  border-radius: 10px;
  color: #fff;
  box-shadow: 1px 2px 4px #000;
  margin: 5px 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #e1d7d7;
    border: 1px solid #2a2a2a;
    color: #2a2a2a;
  }
`;
