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
} from "./Editor.style";

const Editor = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 500,
  };

  return (
    <EditorContainer>
      <EditorTitle>Preencha os campos abaixo antes de começar</EditorTitle>
      <EditorInfoContainer>
        <EditorLabelContainer>
          <EditorLabel>Autor</EditorLabel>
          <EditorInput placeholder="fulano da Silva"></EditorInput>
        </EditorLabelContainer>
        <EditorInputContainer>
          <EditorLabel>Título do texto</EditorLabel>
          <EditorInput placeholder="10 razões para escrever um livro de ficção"></EditorInput>
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

export default Editor;
