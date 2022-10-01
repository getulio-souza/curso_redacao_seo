import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/editor-page/editor-create-text">
            <EditorPageBox>
              <EditorPageBoxTitle>Criar novo texto</EditorPageBoxTitle>
            </EditorPageBox>
          </Link>
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
