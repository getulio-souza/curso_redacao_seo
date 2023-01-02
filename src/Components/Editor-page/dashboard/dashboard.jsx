import React from "react";
import {
  DashboardBackground,
  DashboardContainer,
  DashboardProfileContainer,
  DashboardTitle,
  DashboardProfileInfo,
  DashboardProfileInfoPhoto,
  DashboardProfileInfoName,
  DashboardProfileInfoProfession,
  DashboardOptionsContainer,
  DashBoardSingleOption,
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

//profile image
import ProfilePhoto1 from "../../../assets/profile/photo-1.png";

function dashboard() {
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

            {/* options to select */}
            <DashboardOptionsContainer>
              <DashBoardSingleOption>options 1</DashBoardSingleOption>
              <DashBoardSingleOption>options 2</DashBoardSingleOption>
              <DashBoardSingleOption>options 3</DashBoardSingleOption>
              <DashBoardSingleOption>options 4</DashBoardSingleOption>
            </DashboardOptionsContainer>
          </DashboardProfileContainer>
          <DashboardGraphsAndTopRankContainer>
            <DashboardGraphicsContainer>
              <DashboardWordsRanked>
                <DashboardWordsRankedTitle>
                  Palavras Ranqueadas
                </DashboardWordsRankedTitle>
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
                  # 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </DashboardTopTextsRankedText>
                <DashboardTopTextsRankedText>
                  # 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </DashboardTopTextsRankedText>
              </DashboardTopTextsRankedContent>
            </DashboardTopTextsRanked>
          </DashboardGraphsAndTopRankContainer>
        </DashboardContainer>
      </DashboardBackground>
      ;
    </>
  );
}

export default dashboard;
