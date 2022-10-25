import React from "react";
import { Link } from "react-router-dom";
import {
  EditorPageContainer,
  EditorPageTitle,
  EditorPageBoxContainer,
  EditorPageBoxTitle,
  EditorPageBox,
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
          <Link to="/editor-page/last-texts">
            <EditorPageBox>
              <EditorPageBoxTitle>Últimos textos</EditorPageBoxTitle>
            </EditorPageBox>
          </Link>
          {/* box */}
          <Link to="/editor-page/seo-metrics">
            <EditorPageBox>
              <EditorPageBoxTitle>Desempenho de SEO</EditorPageBoxTitle>
            </EditorPageBox>
          </Link>
        </EditorPageBoxContainer>
      </EditorPageContainer>
    </>
  );
}

export default EditorPageMain;
