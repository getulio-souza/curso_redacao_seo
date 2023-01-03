import styled from "styled-components";

export const DashboardBackground = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  position: relative;
  @media (max-width: 900px) {
    height: 100%;
  }
`;

export const DashboardContainer = styled.div`
  width: 90vw;
  height: 90%;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const DashboardProfileContainer = styled.div`
  background-color: #1a1717;
  width: 25%;
  min-width: 25%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 100%;
    padding-top: 20px;
  }
`;

export const DashboardProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px 30px 0;
`;

export const DashboardTitle = styled.div`
  margin-bottom: 20px;
  font-family: inter;
  font-weight: 700;
  text-decoration: underline;
  color: #fff;
  padding: 0 10px;
  text-align: center;
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
  color: #fff;
`;

export const DashboardProfileInfoProfession = styled.div`
  font-size: 10px;
  font-family: inter;
  font-weight: 500;
  color: #fff;
`;

export const DashboardProfileInfoDescription = styled.div`
  text-align: center;
  line-height: 13px;
  padding: 10px 50px 0px 50px;
  font-size: 10px;
  font-family: inter;
  font-weight: 500;
  color: #fff;
`;

export const DashboardOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  font-family: inter;
`;

export const DashBoardSingleOption = styled.div`
  font-size: 10px;
  width: 70px;
  min-width: 70px;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 8px 40px;
  border-radius: 10px;
  color: #fff;
  box-shadow: 1px 2px 4px #000;
  margin: 5px 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
    border: 1px solid #2a2a2a;
    color: #2a2a2a;
  }
`;

export const DashBoardSingleOptionSelected = styled.div`
  font-size: 10px;
  font-weight: 700;
  width: 70px;
  min-width: 70px;
  background-color: #fff;
  padding: 8px 40px;
  border-radius: 10px;
  color: #2a2a2a;
  box-shadow: 1px 2px 4px #000;
  margin: 5px 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #2a2a2a;
    border: 1px solid #2a2a2a;
    color: #fff;
  }
`;

export const DashboardGraphicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
  }
`;

export const DashboardGraphsAndTopRankContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 900px) {
    padding-bottom: 20px;
  }
`;

export const DashboardWordsRanked = styled.div`
  background-color: #1a1717;
  color: #fff;
  width: 100%;
  font-family: inter;
  text-align: center;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 100%;
    min-width: 100%;
    margin: 0 auto;
    height: 200px;
  }
`;

export const DashboardWordsRankedTitle = styled.h3``;

export const DashboardSeoPosition = styled.div`
  background-color: #1a1717;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 100%;
    min-width: 100%;
    margin: 0 auto;
    height: 200px;
  }
`;

export const DashboardSeoPositionTitle = styled.h3`
  width: 100%;
  font-family: inter;
  text-align: center;
  color: #fff;
`;

export const DashboardTopTextsRanked = styled.div`
  background-color: #1a1717;
  width: 100%;
  height: 60%;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 100%;
    min-width: 100%;
    margin: 0 auto;
    height: fit-content;
  }
`;

export const DashboardTopTextsRankedTitle = styled.h3`
  color: #fff;
  width: 100%;
  font-family: inter;
  text-align: center;
`;

export const DashboardTopTextsRankedContent = styled.div`
  color: #fff;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 10px;
  font-family: inter;
  padding: 20px 40px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardTopTextsRankedText = styled.div`
  font-size: 15px;
  width: 300px;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;
