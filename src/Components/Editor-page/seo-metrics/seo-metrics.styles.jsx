import styled from "styled-components";

export const SeoMetricsContainer = styled.div`
  background-color: #000;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  font-family:inter;
`;

export const SeoMetricsTitle = styled.h1`
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  font-weight: 700;
`;

export const SeoMetricsDashboard = styled.img`
   width:50%;
   height:auto;
`;