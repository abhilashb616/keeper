import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

function Notes(props) {
  return (
    <NotesContainer>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <DeleteButton
        onClick={() => {
          return props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </DeleteButton>
    </NotesContainer>
  );
}

export default Notes;

const NotesContainer = styled.div`
  width: 200px;
  min-height: 200px;
  background-color: Var(--form-color);
  color: var(--text-color);
  border-radius: 7px;
  padding: 10px;
  text-align: center;
  margin-top: 30px;
  margin-left: 30px;
  display: inline-block;
  overflow-wrap: break-word;
  position: relative;
`;
const DeleteButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: var(--icon-bg-color);
  background-color: var(--form-color);
  padding: 3px;
  cursor: pointer;
`;
