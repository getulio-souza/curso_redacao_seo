import styled from "styled-components";

export const TableTextContainer = styled.table`
  text-align: center;
  margin: 0 auto;
  font-family: inter;
  box-shadow: 1px 2px 3px #000;
  border: 1px solid #e1d7d7;
  padding: 10px 15px;
  border-radius: 10px;
  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
  }
`;

export const TableTextRow = styled.tr`
  @media (max-width: 768px) {
    display: block;
    text-align: right;
    position: relative;
  }
`;

export const TabletextHead = styled.th`
  padding: 5px 10px;
  color: #e1d7d7;
  font-weight: 700;
  font-size: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableTextBody = styled.tbody`
  @media (max-width: 768px) {
    width: 200px;
    display: block;
    text-align: right;
    position: relative;
  }
`;

export const TableTextData = styled.td`
  padding: 2px 10px;
  color: #8a8888;
  font-size: 11px;
  @media (max-width: 768px) {
    display: block;
    text-align: right;
    position: relative;
    ::before {
      content: attr(data);
      position: absolute;
      left: 0;
      width: 50%;
      text-align: left;
    }
  }
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
