import styled from "styled-components";

export const DashboardBackground = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

//grid template

export const DashboardContainer = styled.div`
  width: 90vw;
  height: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
`;

export const DashboardProfileContainer = styled.div`
  background-color: #fff;
  width: 25%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DashboardProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
`;

export const DashboardProfileInfoPhoto = styled.img`
  width: 60px;
  height: 60px;
  padding-bottom: 10px;
`;

export const DashboardProfileInfoName = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
  font-family: inter;
  font-weight: 700;
`;

export const DashboardProfileInfoProfession = styled.div`
  font-size: 10px;
  font-family: inter;
  font-weight: 500;
`;

export const DashboardOptionsContainer = styled.div``;
export const DashBoardSingleOption = styled.div``;

export const DashboardGraphicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const DashboardGraphsAndTopRankContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DashboardWordsRanked = styled.div`
  background-color: #fff;
  width: 100%;
  height: 200px;
`;

export const DashboardSeoPosition = styled.div`
  background-color: #fff;
  width: 100%;
  height: 200px;
`;

export const DashboardTopTextsRanked = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50vh;
`;
