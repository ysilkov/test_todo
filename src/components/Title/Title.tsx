import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/todoReducer";
import Main from "../Main/Main";
import style from "./Title.module.css";

const Title = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(1);
  const [titleEmpty, setTitleEmpty] = useState(true);
  const [descriptionEmpty, setDescriptionEmpty] = useState(true);
  const dispatch = useDispatch();
  const newTodo = {
    id: id,
    title: title,
    description: description,
    status: false,
  };
  const createTodoForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.length > 0 && description.length > 0) {
      dispatch(createTodo(newTodo));
      setId(id + 1);
      setTitle("");
      setDescription("");
      setTitleEmpty(true);
      setDescriptionEmpty(true);
    } else {
      setTitleEmpty(false);
      setDescriptionEmpty(false);
    }
  };
  return (
    <div>
      <form className={style.main}>
        <div className={style.container_input}>
          <p>Title:</p>
          {!titleEmpty && title.length === 0 ? (
            <div className={style.errorMessage}>"This field is empty"</div>
          ) : (
            <div></div>
          )}
          <input
            className={
              !titleEmpty && title.length === 0
                ? style.input_error
                : style.input
            }
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={style.container_input}>
          <p>Description:</p>
          {!descriptionEmpty && description.length === 0 ? (
            <div className={style.errorMessage}>"This field is empty"</div>
          ) : (
            <div></div>
          )}
          <input
            className={
              !descriptionEmpty && description.length === 0
                ? style.input_error
                : style.input
            }
            type="text"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={style.container_button}>
          <button className={style.button} onClick={(e) => createTodoForm(e)}>
            Create
          </button>
        </div>
      </form>

      <Main />
    </div>
  );
};

export default Title;
