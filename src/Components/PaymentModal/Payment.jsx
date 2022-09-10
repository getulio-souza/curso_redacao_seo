import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  PaymentModalContainer,
  PaymentModalInternalContainer,
  PaymentInfoContainer,
  PaymentBox,
  PaymentCardNumber,
  PaymentCardNumberInput,
  PaymentCardOwner,
  ExpirationMonth,
  InputText,
  PaymentCodeBox,
  PaymentCodeTitle,
  PaymentCodeInput,
  PaymentSubmitBtn,
  PaymentPasswordSaveBox,
  ClosePaymentBtn,
} from "./Payment.style";


function PaymentModal({ closeModal }) {

  /* variáveis para preencher o cartão com dados*/
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <PaymentModalContainer>
      <PaymentModalInternalContainer>
        {/* area do cartão */}
        <Cards 
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        {/* area para preencher dados */}
        <PaymentInfoContainer>
          <PaymentBox>
            <PaymentCardNumber>Número do cartão</PaymentCardNumber>
            <PaymentCardNumberInput
              type="tel"
              name="number"
              maxLength={16}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            ></PaymentCardNumberInput>
          </PaymentBox>
          <PaymentBox>
            <PaymentCardOwner>Dono do cartão</PaymentCardOwner>
            <PaymentCardNumberInput
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            ></PaymentCardNumberInput>
          </PaymentBox>
          <ExpirationMonth>
            <InputText>Data de expiração</InputText>
            <PaymentCodeInput
              type="text"
              maxLength={4}
              name="expira em:"
              placeholder="mm/yy"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            ></PaymentCodeInput>
          </ExpirationMonth>

          <PaymentCodeBox>
            <PaymentCodeTitle>CVV</PaymentCodeTitle>
            <PaymentCodeInput
              type="tel"
              maxLength={3}
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
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
