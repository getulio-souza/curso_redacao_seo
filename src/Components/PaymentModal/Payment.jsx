import React from "react";
import {
  PaymentModalContainer,
  PaymentModalInternalContainer,
  PaymentBox,
  PaymentMainTitle,
  PaymentCardNumber,
  PaymentCardNumberInput,
  PaymentCardOwner,
  ExpirationMonth,
  InputText,
  InputBoxMonthSelect,
  PaymentCodeBox,
  PaymentCodeTitle,
  PaymentCodeInput,
  PaymentSubmitBtn,
  PaymentPasswordSaveBox,
  PaymentPasswordSaveText,
  PaymentPasswordSaveCheck,
  ClosePaymentBtn,
} from "./Payment.style";
function PaymentModal({ closeModal }) {
  return (
    <PaymentModalContainer>
      <PaymentModalInternalContainer>
        <PaymentBox>
          <PaymentMainTitle>Informe seus dados</PaymentMainTitle>
          <PaymentCardNumber>Número do cartão</PaymentCardNumber>
          <PaymentCardNumberInput
            type="text"
            maxLength="16"
          ></PaymentCardNumberInput>
        </PaymentBox>
        <PaymentBox>
          <PaymentCardOwner>Dono do cartão</PaymentCardOwner>
          <PaymentCardNumberInput
            type="text"
            maxLength="16"
          ></PaymentCardNumberInput>
        </PaymentBox>
        <ExpirationMonth>
          <InputText>Data de expiração</InputText>
          <InputBoxMonthSelect>
            <option value="mês" selected disabled>
              Mês
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </InputBoxMonthSelect>
          <InputBoxMonthSelect>
            <option value="mês" selected disabled>
              Ano
            </option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </InputBoxMonthSelect>
        </ExpirationMonth>
        <PaymentCodeBox>
          <PaymentCodeTitle>CVV</PaymentCodeTitle>
          <PaymentCodeInput
            type="text"
            maxLength="3"
            pattern="[0-9]+"
          ></PaymentCodeInput>
        </PaymentCodeBox>
        <PaymentPasswordSaveBox>
          {/* <PaymentPasswordSaveCheck></PaymentPasswordSaveCheck> */}
          <PaymentPasswordSaveText>Memorizar cartão</PaymentPasswordSaveText>
          <PaymentSubmitBtn>Confirmar</PaymentSubmitBtn>
        </PaymentPasswordSaveBox>
        <ClosePaymentBtn onClick={() => closeModal(false)}>x</ClosePaymentBtn>
      </PaymentModalInternalContainer>
    </PaymentModalContainer>
  );
}

export default PaymentModal;
