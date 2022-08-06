import React from "react";
import {
  PaymentModalContainer,
  PaymentBox,
  PaymentCardNumber,
  PaymentCardNumberInput,
  PaymentCardOwner,
  ExpirationMonth,
  ExpirationYear,
  InputText,
  InputBoxMonthSelect,
  PaymentCodeBox,
  PaymentCodeTitle,
  PaymentCodeInput,
  PaymentSubmitBtn,
  ClosePaymentBtn,
} from "./Payment.style";
function PaymentModal({ closeModal }) {
  return (
    <PaymentModalContainer>
      <PaymentBox>
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
        <InputText>Mês de expiração</InputText>
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
      </ExpirationMonth>
      <ExpirationYear>
        <InputText>Ano de expiração</InputText>
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
          </ExpirationYear>
          <PaymentCodeBox>
          <PaymentCodeTitle>CVV</PaymentCodeTitle>
          <PaymentCodeInput type="text" maxLength="3" pattern="[0-9]+"></PaymentCodeInput>
          </PaymentCodeBox>
          <PaymentSubmitBtn>Confirmar</PaymentSubmitBtn>
      <ClosePaymentBtn> 
        <button onClick={() => closeModal(false)}>x</button>
      </ClosePaymentBtn>
    </PaymentModalContainer>
  );
}

export default PaymentModal;
