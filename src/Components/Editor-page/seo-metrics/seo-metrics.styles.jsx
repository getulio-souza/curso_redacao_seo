import styled from "styled-components";
export const SeoMetricsBackground = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
`;

export const SeoMetricsContainer = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: inter;
  width: 900px;
  height: 450px;
  @media screen and (min-width: 1366px) {
    height: 500px;
  }
`;

export const SeoMetricsTitleContainer = styled.div`
  padding: 10px 0;
`;

export const SeoMetricsTitle = styled.h1`
  color: #fff;
  text-align: center;
`;

export const SeoMetricsCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SeoMetricsCard = styled.div`
  background-color: #000;
  padding: 10px;
  min-width: 220px;
  min-height: 110px;
  border-radius: 20px;
  border: 1px solid #fff;
`;

export const SeoMetricsCardIcon = styled.div``;

export const SeoMetricsCardtitle = styled.h5`
  color: #fff;
  text-align: center;
  max-width: 150px;
  margin: 0 auto;
  margin-top: 10px;
`;
export const SeoMetricsCardNumber = styled.div`
  margin-top: 10px;
  font-size: 40px;
  color: #fff;
  text-align: center;
`;
export const SeoMetricsCardPercentage = styled.div``;

/* table */

export const SeoMetricsTableContainer = styled.table`
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  background-color: #000;
  padding: 10px;
`;

export const SeoMetricsTableRow = styled.tr`
  padding-bottom: 10px;
`;

export const SeoMetricsTableHead = styled.th`
  padding: 0 50px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  border: 1px solid #fff;
`;

export const SeoMetricsTableData = styled.td`
  border: 1px solid #fff;
  border-top: none;
  color: #fff;
  font-size: 15px;
`;

export const SeoMetricsTableDataBtn = styled.button`
  border: none;
  margin: 5px 0;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;
