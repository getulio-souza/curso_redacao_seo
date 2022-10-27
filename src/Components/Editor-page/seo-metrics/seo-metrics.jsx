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
            <SeoMetricsCardNumber>20</SeoMetricsCardNumber>
            <SeoMetricsCardPercentage></SeoMetricsCardPercentage>
          </SeoMetricsCard>
          {/* card*/}
          <SeoMetricsCard>
            <SeoMetricsCardIcon></SeoMetricsCardIcon>
            <SeoMetricsCardtitle>Palavras ranqueadas</SeoMetricsCardtitle>
            <SeoMetricsCardNumber>20</SeoMetricsCardNumber>
            <SeoMetricsCardPercentage></SeoMetricsCardPercentage>
          </SeoMetricsCard>
        </SeoMetricsCardsContainer>
        <SeoMetricsTableContainer></SeoMetricsTableContainer>
      </SeoMetricsContainer>
    </SeoMetricsBackground>
  );
}

export default seoMetrics;
