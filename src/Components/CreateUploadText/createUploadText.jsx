import React from 'react';
import {TextOutsideContainer,TextInsideContainer, TextInsideTitle } from "./createUploadText.style"

function CreateUploadText() {
  return (
      <TextOutsideContainer>
          <TextInsideContainer>
              <TextInsideTitle>
          Publique o seu texto abaixo 
              </TextInsideTitle>
          </TextInsideContainer>
    </TextOutsideContainer>
  )
}

export default CreateUploadText