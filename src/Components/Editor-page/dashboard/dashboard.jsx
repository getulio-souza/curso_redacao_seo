import React, { useState } from "react";
import {
  DashboardBackground,
  DashboardContainer,
  DashboardProfileContainer,
  DashboardTitle,
  DashboardProfileInfo,
  DashboardProfileInfoPhoto,
  DashboardProfileInfoName,
  DashboardProfileInfoProfession,
  DashboardProfileInfoDescription,
  DashboardOptionsContainer,
  DashBoardSingleOption,
  DashBoardSingleOptionSelected,
  DashboardGraphicsContainer,
  DashboardGraphsAndTopRankContainer,
  DashboardWordsRanked,
  DashboardWordsRankedTitle,
  ChartContainer,
  DashboardSeoPosition,
  DashboardSeoPositionTitle,
  DashboardTopTextsRanked,
  DashboardTopTextsRankedTitle,
} from "./dashboard.styles";

//charts
import BarChart from "./charts/wordsRanked/barChart";
import { UserData } from "./charts/wordsRanked/barData";

import SeoChart from "./charts/seoPosition/seoChart";
import { SeoData, SeoData2 } from "./charts/seoPosition/seoData";

//table
import TopTextsTable from "./table-texts/table";

//profile image
import ProfilePhoto1 from "../../../assets/profile/photo-1.png";

function dashboard() {
  //chart words ranked
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Texto 1",
        data: UserData.map((data) => data.wordsRanked),
      },
    ],
  });

  //charts SEO Position
  const [seoData, setSeoData] = useState({
    labels: SeoData.map((data) => data.position),
    datasets: [
      {
        label: "texto 1",
        data: SeoData.map((data) => data.page),
      },
      {
        label: "texto 2",
        data: SeoData2.map((data) => data.page),
      },
    ],
  });

  return (
    <>
      <DashboardBackground>
        <DashboardContainer>
          <DashboardProfileContainer>
            {/* info about user */}
            <DashboardProfileInfo>
              <DashboardTitle>Painel de informações</DashboardTitle>
              <DashboardProfileInfoPhoto
                src={ProfilePhoto1}
              ></DashboardProfileInfoPhoto>
              <DashboardProfileInfoName>User 1</DashboardProfileInfoName>
              <DashboardProfileInfoProfession>
                Content Writer
              </DashboardProfileInfoProfession>
            </DashboardProfileInfo>

            <DashboardProfileInfoDescription>
              Navegue pelos botões abaixo ou pelos gráficos para acompanhar a
              sua evolução como escritor de SEO.
            </DashboardProfileInfoDescription>

            {/* options to select */}
            <DashboardOptionsContainer>
              <DashBoardSingleOptionSelected>
                Ranking
              </DashBoardSingleOptionSelected>
              <DashBoardSingleOption>Posição (SEO)</DashBoardSingleOption>
              <DashBoardSingleOption>Textos</DashBoardSingleOption>
              <DashBoardSingleOption>Voltar</DashBoardSingleOption>
            </DashboardOptionsContainer>
          </DashboardProfileContainer>

          <DashboardGraphsAndTopRankContainer>
            <DashboardGraphicsContainer>
              <DashboardWordsRanked>
                <DashboardWordsRankedTitle>
                  Palavras Ranqueadas
                </DashboardWordsRankedTitle>
                <ChartContainer>
                  <BarChart chartData={userData} />
                </ChartContainer>
              </DashboardWordsRanked>
              <DashboardSeoPosition>
                <DashboardSeoPositionTitle>
                  Posição em SEO
                </DashboardSeoPositionTitle>
                <ChartContainer>
                  <SeoChart chartData={seoData} />
                </ChartContainer>
              </DashboardSeoPosition>
            </DashboardGraphicsContainer>
            <DashboardTopTextsRanked>
              <DashboardTopTextsRankedTitle>
                Top 6 textos otimizados
              </DashboardTopTextsRankedTitle>
              <TopTextsTable></TopTextsTable>
            </DashboardTopTextsRanked>
          </DashboardGraphsAndTopRankContainer>
        </DashboardContainer>
      </DashboardBackground>
    </>
  );
}

export default dashboard;
