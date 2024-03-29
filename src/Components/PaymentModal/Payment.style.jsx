import styled from "styled-components";

export const PaymentModalContainer = styled.form`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 44;
  font-family: inter;
  @media (max-width: 900px) {
    /* width: 300px; */
  }
`;

export const PaymentModalInternalContainer = styled.div`
  position: fixed;
  background-color: #d8d4d4;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 3px 4px #000;
  z-index: 43;
`;

/* Área de preenchimento de dados **/

export const PaymentInfoContainer = styled.div``;

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentMainTitle = styled.h3`
  font-size: 15px;
`;

export const PaymentCardNumber = styled.h4`
  font-size: 10px;
  color: #444242;
`;

export const PaymentCardOwner = styled.h4`
  font-size: 10px;
  color: #444242;
`;

export const PaymentCardNumberInput = styled.input`
  border: none;
  border-radius: 5px;
  text-align:center;
`;

export const InputBoxContainer = styled.div``;

export const InputMonthandYear = styled.input`
  display:flex;
`;

export const ExpirationMonth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ExpirationDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputText = styled.h5`
  font-size: 10px;
  color: #444242;
  margin-bottom:0;
`;

export const InputBoxMonthSelect = styled.select`
  height: 25px;
  border: none;
  background-color: #fff;
  color: #444242;
  font-size: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    animation-direction: normal;
  }
`;

export const ClosePaymentBtn = styled.button`
  color: #fff;
  font-size: 50px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: red;
  }
`;

export const PaymentCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PaymentCodeTitle = styled.h5`
  font-size: 10px;
  color: #444242;
  margin-bottom:10px;
`;

export const PaymentCodeInput = styled.input`
  width: 50px;
  border: none;
  border-radius: 5px;
  text-align:center;
`;

export const PaymentPasswordSaveBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PaymentPasswordSaveText = styled.h6`
  color: #444242;
`;

export const PaymentSubmitBtn = styled.button`
  background-color: #000;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin: 0 auto;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  }
`;
