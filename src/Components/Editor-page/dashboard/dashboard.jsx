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
  DashboardSeoPosition,
  DashboardTopTextsRanked,
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
              <DashboardWordsRanked></DashboardWordsRanked>
              <DashboardSeoPosition></DashboardSeoPosition>
            </DashboardGraphicsContainer>
            <DashboardTopTextsRanked></DashboardTopTextsRanked>
          </DashboardGraphsAndTopRankContainer>
        </DashboardContainer>
      </DashboardBackground>
      ;
    </>
  );
}

export default dashboard;
