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
  font-family:inter;
  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const PaymentBox = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`;

export const PaymentMainTitle = styled.h3`
  font-size: 15px;
`;

export const PaymentCardNumber = styled.h4`
  font-size:10px;
  color: #444242;
`;

export const PaymentCardOwner = styled.h4`
  font-size: 10px;
  color: #444242;
`;

export const PaymentCardNumberInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
`;

export const InputBoxContainer = styled.div``;

export const ExpirationMonth = styled.div`
  display: flex;
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
`;

export const InputBoxMonthSelect = styled.select`
  height: 30px;
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
  color: #444242;
  font-size:10px;
`;

export const ClosePaymentBtn = styled.button`
  font-size:20px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  cursor:pointer;
  transition:.5s;
  &:hover{
    color:red;
  }
`;

export const PaymentCodeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaymentCodeTitle = styled.h5`
  font-size: 10px;
  color: #444242;
`;

export const PaymentCodeInput = styled.input`
  width: 50px;
  border:none;
  border-bottom:1px solid #000;
`;

export const PaymentPasswordSaveBox = styled.label`
  display: flex;
  align-items:center;
  gap:10px;
`;

export const PaymentPasswordSaveText = styled.h6``;

export const PaymentPasswordSaveCheck = styled.div``;

export const PaymentSubmitBtn = styled.button`
  background-color:#000;
  color:#fff;
  font-weight:700;
  border:none;
  padding:10px 20px;
  border-radius:10px;
  margin-top:20px;
  transition:.5s;
  cursor:pointer;
  &:hover{
    background-color:transparent;
    border:1px solid #000;
    color:#000;
  }
`;
