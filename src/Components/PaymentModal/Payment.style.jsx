import styled from "styled-components";

export const PaymentModalContainer = styled.form`
  width: 600px;
  height: 400px;
  background-color: #fff;
  box-shadow: 2px 3px 4px #000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  z-index: 44;
`;

export const PaymentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaymentCardNumber = styled.h4``;

export const PaymentCardOwner = styled.h4``;

export const PaymentCardNumberInput = styled.input``;

export const InputBoxContainer = styled.div``;

export const ExpirationMonth = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ExpirationYear = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputText = styled.h5``;

export const InputBoxMonthSelect = styled.select`
  height: 30px;
`;

export const ClosePaymentBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
`;

export const PaymentCodeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaymentCodeTitle = styled.h5``;

export const PaymentCodeInput = styled.input`
  width: 50px;
`;

export const PaymentSubmitBtn = styled.button``;
