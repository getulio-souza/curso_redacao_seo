import React from 'react'
import {
  SeoMetricsContainer,
  SeoMetricsTitle,
  SeoMetricsDashboard,
} from "./seo-metrics.styles";

import dashboardExemple from "../../../assets/dashboard/figma-admin-dashboard-ui-kit.jpg"

function seoMetrics() {
  return (
    <SeoMetricsContainer>
      <SeoMetricsTitle>Métricas de SEO - Dashboard</SeoMetricsTitle>
      <SeoMetricsDashboard src={dashboardExemple}></SeoMetricsDashboard>
    </SeoMetricsContainer>
  );
}

export default seoMetrics