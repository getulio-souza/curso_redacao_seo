import React from "react";
import {
  TextOutsideContainer,
  InsideContainer,
  TextInsideTitle,
  InputContainer,
  AuthorInput,
  TitleInput,
} from "./createUploadText.style";

function CreateUploadText() {
  return (
    <TextOutsideContainer>
      <InsideContainer>
        <TextInsideTitle>Publique o seu texto abaixo</TextInsideTitle>
        {/* <AuthorLabel>Autor</AuthorLabel> */}
        <InputContainer>
        <AuthorInput placeholder="Digite o nome do autor" inputMode="text" required></AuthorInput>
        {/* <TitleLabel>Título do texto</TitleLabel> */}
        <TitleInput placeholder="Digite o título do texto" inputMode="text" required></TitleInput>
        </InputContainer>
      </InsideContainer>
    </TextOutsideContainer>
  );
}

export default CreateUploadText;
