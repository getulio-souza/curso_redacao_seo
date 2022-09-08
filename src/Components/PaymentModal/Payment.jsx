import React from "react";
import {
  PaymentModalContainer,
  PaymentModalInternalContainer,

  /* cartão - frente */
  CreditCardContainer,
  CreditCardFlagContainer,
  CreditCardFlag,
  CreditCardChipAndNumber,
  CreditCardChip,
  CreditCardNumber,
  CreditCardNameAndExpiration,
  CreditCardName,
  CreditCardExpiration,
  /* cartão - verso */
  CreditCardBack,
  CreditCardBackStripe,
  CreditCardBackSecurityContainer,
  CreditCardBackSecurityCode,
  CreditCardBackBox,
  // CreditCardBackImage,
  /*campos */
  PaymentInfoContainer,
  PaymentBox,
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
  ClosePaymentBtn,
} from "./Payment.style";

import Cardflag from "../../assets/credit-card/flag-2.png";

import CardChip from "../../assets/credit-card/chip.jpg";

function PaymentModal({ closeModal }) {
  return (
    <PaymentModalContainer>
      <PaymentModalInternalContainer>
        {/* area do cartão - frente */}
        <CreditCardContainer>
          <CreditCardFlagContainer>
            <CreditCardFlag src={Cardflag}></CreditCardFlag>
          </CreditCardFlagContainer>

          <CreditCardChipAndNumber>
            <CreditCardChip src={CardChip}></CreditCardChip>
            <CreditCardNumber>0000 0000 0000 0000</CreditCardNumber>
          </CreditCardChipAndNumber>

          <CreditCardNameAndExpiration>
            <CreditCardName>José Bonifácio Santana</CreditCardName>
            <CreditCardExpiration>00/00</CreditCardExpiration>
          </CreditCardNameAndExpiration>

          {/* area do cartão - verso */}
          <CreditCardBack>
            <CreditCardBackStripe></CreditCardBackStripe>
            <CreditCardBackSecurityContainer>
              <CreditCardBackSecurityCode>CVV</CreditCardBackSecurityCode>
              <CreditCardBackBox></CreditCardBackBox>
            </CreditCardBackSecurityContainer>
            {/* <CreditCardBackImage src={Cardflag}></CreditCardBackImage> */}
          </CreditCardBack>
        </CreditCardContainer>

        {/* area para preencher dados */}
        <PaymentInfoContainer>
          <PaymentBox>
            <PaymentCardNumber>Número do cartão</PaymentCardNumber>
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
          <PaymentBox>
            <PaymentCardOwner>Dono do cartão</PaymentCardOwner>
            <PaymentCardNumberInput
              type="text"
              maxLength="16"
            ></PaymentCardNumberInput>
          </PaymentBox>
          <PaymentCodeBox>
            <PaymentCodeTitle>CVV</PaymentCodeTitle>
            <PaymentCodeInput
              type="text"
              maxLength="3"
              pattern="[0-9]+"
            ></PaymentCodeInput>
          </PaymentCodeBox>
          <PaymentPasswordSaveBox>
            <PaymentSubmitBtn>Confirmar</PaymentSubmitBtn>
          </PaymentPasswordSaveBox>
        </PaymentInfoContainer>
      </PaymentModalInternalContainer>
      <ClosePaymentBtn onClick={() => closeModal(false)}>x</ClosePaymentBtn>
    </PaymentModalContainer>
  );
}

export default PaymentModal;
