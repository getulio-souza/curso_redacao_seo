import React from "react";
import {
  SeoMetricsBackground,
  SeoMetricsContainer,
  SeoMetricsCardsContainer,
  SeoMetricsCard,
  SeoMetricsCardtitle,
  SeoMetricsCardNumber,
  SeoMetricsTitleContainer,
  SeoMetricsCardIcon,
  SeoMetricsCardPercentage,
  SeoMetricsTitle,
  SeoMetricsTableContainer,
  SeoMetricsTableRow,
  SeoMetricsTableHead,
  SeoMetricsTableData,
  SeoMetricsTableDataBtn,
} from "./seo-metrics.styles";

function seoMetrics() {
  return (
    <SeoMetricsBackground>
      <SeoMetricsContainer>
        <SeoMetricsTitleContainer>
          <SeoMetricsTitle>Métricas de SEO</SeoMetricsTitle>
        </SeoMetricsTitleContainer>
        <SeoMetricsCardsContainer>
          {/* card*/}
          <SeoMetricsCard>
            <SeoMetricsCardIcon></SeoMetricsCardIcon>
            <SeoMetricsCardtitle>Palavras ranqueadas</SeoMetricsCardtitle>
            <SeoMetricsCardNumber>20</SeoMetricsCardNumber>
            <SeoMetricsCardPercentage></SeoMetricsCardPercentage>
          </SeoMetricsCard>
          {/* card*/}
          <SeoMetricsCard>
            <SeoMetricsCardIcon></SeoMetricsCardIcon>
            <SeoMetricsCardtitle>
              Posição nos mecanismos de busca
            </SeoMetricsCardtitle>
            <SeoMetricsCardNumber>2ª</SeoMetricsCardNumber>
            <SeoMetricsCardPercentage></SeoMetricsCardPercentage>
          </SeoMetricsCard>
          {/* card*/}
          <SeoMetricsCard>
            <SeoMetricsCardIcon></SeoMetricsCardIcon>
            <SeoMetricsCardtitle>Tempo de permanência</SeoMetricsCardtitle>
            <SeoMetricsCardNumber>4min20s</SeoMetricsCardNumber>
            <SeoMetricsCardPercentage></SeoMetricsCardPercentage>
          </SeoMetricsCard>
        </SeoMetricsCardsContainer>
        {/* table */}
        <SeoMetricsTableContainer>
          <SeoMetricsTableRow>
            <SeoMetricsTableHead>Autor</SeoMetricsTableHead>
            <SeoMetricsTableHead>Texto</SeoMetricsTableHead>
            <SeoMetricsTableHead>quantidade de palavas</SeoMetricsTableHead>
            <SeoMetricsTableHead>Ação</SeoMetricsTableHead>
          </SeoMetricsTableRow>
          <SeoMetricsTableRow>
            <SeoMetricsTableData>José</SeoMetricsTableData>
            <SeoMetricsTableData>Texto 1</SeoMetricsTableData>
            <SeoMetricsTableData>visualizar</SeoMetricsTableData>
            <SeoMetricsTableData>
              <SeoMetricsTableDataBtn>ver mais</SeoMetricsTableDataBtn>
            </SeoMetricsTableData>
          </SeoMetricsTableRow>
          <SeoMetricsTableRow>
            <SeoMetricsTableData>José</SeoMetricsTableData>
            <SeoMetricsTableData>Texto 2</SeoMetricsTableData>
            <SeoMetricsTableData>850</SeoMetricsTableData>
            <SeoMetricsTableData>
              <SeoMetricsTableDataBtn>ver mais</SeoMetricsTableDataBtn>
            </SeoMetricsTableData>
          </SeoMetricsTableRow>
          <SeoMetricsTableRow>
            <SeoMetricsTableData>José</SeoMetricsTableData>
            <SeoMetricsTableData>Texto 3</SeoMetricsTableData>
            <SeoMetricsTableData>670</SeoMetricsTableData>
            <SeoMetricsTableData>
              <SeoMetricsTableDataBtn>ver mais</SeoMetricsTableDataBtn>
            </SeoMetricsTableData>
          </SeoMetricsTableRow>
          <SeoMetricsTableRow>
            <SeoMetricsTableData>José</SeoMetricsTableData>
            <SeoMetricsTableData>Texto 4</SeoMetricsTableData>
            <SeoMetricsTableData>1210</SeoMetricsTableData>
            <SeoMetricsTableData>
              <SeoMetricsTableDataBtn>ver mais</SeoMetricsTableDataBtn>
            </SeoMetricsTableData>
          </SeoMetricsTableRow>
        </SeoMetricsTableContainer>
      </SeoMetricsContainer>
    </SeoMetricsBackground>
  );
}

export default seoMetrics;
