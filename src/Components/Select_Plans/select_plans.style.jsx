import styled from "styled-components";

export const SelectContainer = styled.div`
 width:100vw;
 height:50vh;
`;

export const SelectContainerHeader = styled.div`
  text-align:center;
  padding: 4rem 0;
`;

export const SelectTitle = styled.h1`
  font-family:inter;
  font-size:2.5rem;
`;

export const SelectSubTitle = styled.h3`
  font-family:inter;
  line-height:1.5rem;
  max-width:500px;
  margin:0 auto;
`;

export const SelectPlansContainer = styled.div`
  background-color:#000;
  padding:3rem 0;
  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items:center;
  gap:2rem;
  @media(max-width:700px){
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export const SelectPlanCard = styled.div`
  background-color:#FFFFFF;
  max-width:200px;
  height:fit-content;
  padding:5rem 2rem;
  border-radius:10px;
  display: flex;
  flex-direction:column;
  margin:2rem 0;
  justify-content:space-evenly;
  align-items:center;
  transition:.5s;
  cursor:default;

  &:hover{
    transform: translateY(-10px);
  }

  @media (max-width:700px){
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const SelectPlanHeader = styled.div`
  text-align:center;
`;

export const SelectPlanTitle = styled.h2`
   font-family: inter;
`;

export const SelectPlanImg = styled.div`
  background-color: grey;
  width:50px;
  height:50px;
  margin: 0 auto;
  clip-path: circle(50%);
`;

export const SelectPlanPrice = styled.p``;

export const SelectPlanListContainer = styled.div`
  text-align:left;
  list-style: none;
`;

export const SelectPlanList = styled.li``;

export const SelectPlanListIcon = styled.i``;

export const SelectPlanListText = styled.p``;

export const SelectPlanBtn = styled.button`
  background-color: #000;
  color:#fff;
  border-style:none;
  border-radius:10px;
  font-size:20px;
  font-family:inter;
  font-weight:700;
  padding:7px 40px;
  margin-top:2rem;
  cursor:pointer;
  transition:.5s;
  &:hover{
    background-color: transparent;
    border:1px solid #000;
    color:#000;
  }
`;