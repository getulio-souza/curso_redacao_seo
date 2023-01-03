import React from "react";
import {
  TableTextContainer,
  TableTextRow,
  TabletextHead,
  TableTextData,
  TableActionBtn,
} from "./table.styles";

function TopTextsTable() {
  return (
    <>
      <TableTextContainer>
        <TableTextRow>
          <TabletextHead>Posição</TabletextHead>
          <TabletextHead>Nome</TabletextHead>
          <TabletextHead>Qtde de palavras</TabletextHead>
          <TabletextHead>Tempo de leitura</TabletextHead>
          <TabletextHead>Visualizações</TabletextHead>
          <TabletextHead>Comentários</TabletextHead>
          <TabletextHead>Visualizar</TabletextHead>
        </TableTextRow>
        <TableTextRow>
          <TableTextData>#1</TableTextData>
          <TableTextData>texto 3</TableTextData>
          <TableTextData>2000</TableTextData>
          <TableTextData>1min33s</TableTextData>
          <TableTextData>11</TableTextData>
          <TableTextData>7</TableTextData>
          <TableTextData>
            <TableActionBtn>Abrir</TableActionBtn>
          </TableTextData>
        </TableTextRow>
        <TableTextRow>
          <TableTextData>#2</TableTextData>
          <TableTextData>texto 3</TableTextData>
          <TableTextData>2200</TableTextData>
          <TableTextData>6m12s</TableTextData>
          <TableTextData>90</TableTextData>
          <TableTextData>14</TableTextData>
          <TableTextData>
            <TableActionBtn>Abrir</TableActionBtn>
          </TableTextData>
        </TableTextRow>
        <TableTextRow>
          <TableTextData>#3</TableTextData>
          <TableTextData>texto 4</TableTextData>
          <TableTextData>5000</TableTextData>
          <TableTextData>8m44s</TableTextData>
          <TableTextData>54</TableTextData>
          <TableTextData>22</TableTextData>
          <TableTextData>
            <TableActionBtn>Abrir</TableActionBtn>
          </TableTextData>
        </TableTextRow>
      </TableTextContainer>
    </>
  );
}

export default TopTextsTable;
