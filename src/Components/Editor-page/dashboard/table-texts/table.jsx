import React from "react";
import {
  TableTextContainer,
  TableTextRow,
  TableTextBody,
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
        <TableTextBody>
          <TableTextRow>
            <TableTextData className="data">#1</TableTextData>
            <TableTextData className="data">texto 3</TableTextData>
            <TableTextData className="data">2000</TableTextData>
            <TableTextData className="data">1min33s</TableTextData>
            <TableTextData className="data">11</TableTextData>
            <TableTextData className="data">7</TableTextData>
            <TableTextData className="data">
              <TableActionBtn>Abrir</TableActionBtn>
            </TableTextData>
          </TableTextRow>
          <TableTextRow>
            <TableTextData className="data">#2</TableTextData>
            <TableTextData className="data">texto 3</TableTextData>
            <TableTextData className="data">2200</TableTextData>
            <TableTextData className="data">6m12s</TableTextData>
            <TableTextData className="data">90</TableTextData>
            <TableTextData className="data">14</TableTextData>
            <TableTextData className="data">
              <TableActionBtn>Abrir</TableActionBtn>
            </TableTextData>
          </TableTextRow>
          <TableTextRow>
            <TableTextData className="data">#3</TableTextData>
            <TableTextData className="data">texto 4</TableTextData>
            <TableTextData className="data">5000</TableTextData>
            <TableTextData className="data">8m44s</TableTextData>
            <TableTextData className="data">54</TableTextData>
            <TableTextData className="data">22</TableTextData>
            <TableTextData className="data">
              <TableActionBtn>Abrir</TableActionBtn>
            </TableTextData>
          </TableTextRow>
        </TableTextBody>
      </TableTextContainer>
    </>
  );
}

export default TopTextsTable;

//https://www.youtube.com/watch?v=HKWtJPumb7g
