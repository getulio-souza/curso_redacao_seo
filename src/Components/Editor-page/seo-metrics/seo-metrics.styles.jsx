import styled from "styled-components";
export const SeoMetricsBackground = styled.div`
  background-color: #000;
width: 100%;
height: 100vh;
`;

export const SeoMetricsContainer = styled.div`
  background-color: #fff;
  border-radius:10px;
  box-shadow:1px 1px 1px #c8c4c4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: inter;
  width:900px;
  height:450px;
  @media screen and (min-width:1366px){
    height:500px;
  }
`;
export const SeoMetricsTitleContainer = styled.div`
  padding: 10px 0;
`;



export const SeoMetricsTitle = styled.h1`
 color:#000;
 text-align:center;
`;

export const SeoMetricsCardsContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap:40px;
`;

export const SeoMetricsCard = styled.div`
    background-color: #000;
    padding: 10px;
    min-width:220px;
    min-height:110px;
    border-radius:20px;
`;

export const SeoMetricsCardIcon = styled.div``;

export const SeoMetricsCardtitle = styled.h5`
  color:#fff;
  text-align:center;
  max-width:150px;
  margin: 0 auto;
  margin-top: 10px;
`;
export const SeoMetricsCardNumber = styled.div``;
export const SeoMetricsCardPercentage = styled.div``;

export const SeoMetricsTableContainer = styled.div`
  width:100%;
  height: auto;
  background-color: #000;
`;
