import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import {
  EditorContainer,
  EditorTitle,
  ButtonsContainer,
  BtnEditor,
  EditorInfoContainer,
  EditorLabelContainer,
  EditorLabel,
  EditorInputContainer,
  EditorInput,
} from "./CreateText.styles";

const EditorCreateText = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 500,
  };

  return (
    <EditorContainer>
      <EditorTitle>Preencha os campos abaixo para criar o seu texto</EditorTitle>
      <EditorInfoContainer>
        <EditorLabelContainer>
          <EditorLabel>Autor</EditorLabel>
          <EditorInput placeholder="Digite o nome"></EditorInput>
        </EditorLabelContainer>
        <EditorInputContainer>
          <EditorLabel>Título do texto</EditorLabel>
          <EditorInput placeholder="Digite o título"></EditorInput>
        </EditorInputContainer>
      </EditorInfoContainer>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <ButtonsContainer>
        <BtnEditor>Publicar</BtnEditor>
      </ButtonsContainer>
    </EditorContainer>
  );
};

export default EditorCreateText;
