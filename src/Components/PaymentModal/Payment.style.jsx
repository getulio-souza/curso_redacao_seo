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

/* Área do cartão - frente */

export const CreditCardContainer = styled.div`
  /* background-color: #cbb32b; */
  width: 100%;
  height: fit-content;
  margin-bottom: 10px;
  position: relative;
  box-shadow: 1px 2px 3px #000;
  border-radius: 10px;
  transition: transform 0.4s ease-out;
  transform: perspective(1000px) rotateY(0deg);
`;

export const CreditCardFlagContainer = styled.div`
  display: flex;
`;

export const CreditCardFlag = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CreditCardChipAndNumber = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreditCardChip = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const CreditCardNumber = styled.h6`
  margin: 10px 0 0 10px;
`;

export const CreditCardNameAndExpiration = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`;

export const CreditCardName = styled.h6``;

export const CreditCardExpiration = styled.p`
  font-size: 10px;
`;

/* Área do cartão - verso */

export const CreditCardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #cbb32b; */
  box-shadow: 1px 2px 3px #000;
  border-radius: 5px;
  text-align: right;
  transition: transform 0.4s ease-out;
  transform: perspective(1000px) rotateY(180deg);
`;

export const CreditCardBackStripe = styled.div`
  background-color: #000;
  width: 100%;
  margin: 20px 0;
  height: 20px;
`;

export const CreditCardBackSecurityContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CreditCardBackBox = styled.div`
  background-color: #000;
  padding: 0 20px;
  width: 130px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 10px;
  border-radius: 3px;
`;

export const CreditCardBackSecurityCode = styled.h6`
  color: #000;
  z-index: 99999;
  margin-right: 20px;
  margin-top: -10px;
`;

/*https://www.youtube.com/watch?v=G7_VTWnWz40&t=389s ->>>>  terminar de assistir!  16:30*/

export const CreditCardBackImage = styled.img`
  width: 30px;
  height: auto;
  position: absolute;
  bottom: 10px;
  right: 15px;
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
  margin-top: 10px;
`;

export const ExpirationDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputText = styled.h5`
  font-size: 10px;
  /* padding:0 20px; */
  color: #444242;
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
`;

export const PaymentCodeInput = styled.input`
  width: 50px;
  border: none;
  border-radius: 5px;
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
