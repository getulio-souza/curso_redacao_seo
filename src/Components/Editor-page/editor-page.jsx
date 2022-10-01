import React from "react";
import {
  EditorPageContainer,
  EditorPageTitle,
  EditorPageBoxContainer,
  EditorPageBox,
  EditorPageBoxTitle,
} from "./editor-page.style";

function EditorPageMain({ closeModal }) {
  return (
    <>
      <EditorPageContainer>
        <EditorPageTitle>Selecione uma categoria</EditorPageTitle>
        <EditorPageBoxContainer>
          {/* box */}
          <EditorPageBox>
            <EditorPageBoxTitle>Criar novo texto</EditorPageBoxTitle>
          </EditorPageBox>
          {/* box */}
          <EditorPageBox>
            <EditorPageBoxTitle>Revisões pendentes</EditorPageBoxTitle>
          </EditorPageBox>
          {/* box */}
          <EditorPageBox>
            <EditorPageBoxTitle>Últimos textos</EditorPageBoxTitle>
          </EditorPageBox>
          {/* box */}
          <EditorPageBox>
            <EditorPageBoxTitle>Desempenho de SEO</EditorPageBoxTitle>
          </EditorPageBox>
        </EditorPageBoxContainer>
      </EditorPageContainer>
    </>
  );
}

export default EditorPageMain;
