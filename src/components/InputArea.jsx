import React, { useState } from "react";
import Notes from "./Notes";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

function InputArea() {
  const [todo, setTodo] = useState({ title: "", note: "" });
  const [keeper, setKeeper] = useState([]);
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setTodo((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (todo.title.length === 0 || todo.note.length === 0)
      alert("content required");
    else
      setKeeper((prevTodo) => {
        return [...prevTodo, todo];
      });

    setTodo({ title: "", note: "" });
  }
  function handleDelete(id) {
    setKeeper((prevTodo) => {
      return prevTodo.filter((notes, index) => {
        return index !== id;
      });
    });
  }
  function handleExpand() {
    setExpand(true);
  }

  return (
    <InputContainer>
      <form>
        {expand ? (
          <input
            onChange={handleChange}
            value={todo.title}
            type="text"
            name="title"
            placeholder="Title"
          />
        ) : null}

        <textarea
          onChange={handleChange}
          onClick={handleExpand}
          value={todo.note}
          name="note"
          rows={expand ? "3" : "1"}
          placeholder="Take a note..."
        ></textarea>
        <button onClick={handleSubmit} type="submit">
          <AddIcon />
        </button>
      </form>
      {keeper.map((todos, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={todos.title}
            content={todos.note}
            onDelete={handleDelete}
          />
        );
      })}
    </InputContainer>
  );
}

export default InputArea;

const InputContainer = styled.div`
  width: 100%;
  min-height: 720px;
  padding-top: 20px;
`;
