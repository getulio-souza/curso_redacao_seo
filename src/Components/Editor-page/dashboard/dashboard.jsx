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
  DashboardSeoPosition,
  DashboardSeoPositionTitle,
  DashboardTopTextsRanked,
  DashboardTopTextsRankedTitle,
  DashboardTopTextsRankedContent,
  DashboardTopTextsRankedText,
} from "./dashboard.styles";

//charts
import BarChart from "./charts/barChart";
import { UserData } from "./charts/barData";

//profile image
import ProfilePhoto1 from "../../../assets/profile/photo-1.png";

function dashboard() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Palavras ranqueadas",
        data: UserData.map((data) => data.wordsRanked),
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
                <BarChart chartData={userData} />
              </DashboardWordsRanked>
              <DashboardSeoPosition>
                <DashboardSeoPositionTitle>
                  Posição em SEO
                </DashboardSeoPositionTitle>
              </DashboardSeoPosition>
            </DashboardGraphicsContainer>
            <DashboardTopTextsRanked>
              <DashboardTopTextsRankedTitle>
                Top 6 textos otimizados
              </DashboardTopTextsRankedTitle>
              <DashboardTopTextsRankedContent>
                <DashboardTopTextsRankedText>
                  # 1 - Lorem ipsum dolor sit amet.
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 2 - Lorem ipsum dolor sit amet.
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 3 - Lorem ipsum dolor sit amet.
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 4 - Lorem ipsum dolor sit amet.
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 5 - Lorem ipsum dolor sit amet.
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 6 - Lorem ipsum dolor sit amet.
                </DashboardTopTextsRankedText>
              </DashboardTopTextsRankedContent>
            </DashboardTopTextsRanked>
          </DashboardGraphsAndTopRankContainer>
        </DashboardContainer>
      </DashboardBackground>
    </>
  );
}

export default dashboard;
