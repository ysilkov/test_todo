import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/todoReducer";
import Main from "../Main/Main";
import style from "./Title.module.css";

const Title = () => {
  const [id, setId] = useState(1);
  const [titleEmpty, setTitleEmpty] = useState(" ");
  const [descriptionEmpty, setDescriptionEmpty] = useState(" ");
  const dispatch = useDispatch();
  const createTodoForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.elements.namedItem(
      "title"
    ) as HTMLInputElement;
    const description = e.currentTarget.elements.namedItem(
      "description"
    ) as HTMLInputElement;
    setTitleEmpty(title.value);
    setDescriptionEmpty(description.value);
    if (title.value.length > 0 && description.value.length > 0) {
      dispatch(
        createTodo({
          id: id,
          title: title.value,
          description: description.value,
          status: false,
        })
      );
      setId(id + 1);
      title.value = "";
      description.value = "";
    }
  };
  const handlerChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleEmpty(e.target.value);
  };
  const handlerChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionEmpty(e.target.value);
  };
  return (
    <div>
      <form className={style.main} onSubmit={createTodoForm}>
        <div className={style.container_input}>
          <p>Title:</p>
          {titleEmpty.length === 0 ? (
            <div className={style.errorMessage}>"This field is empty"</div>
          ) : (
            <div></div>
          )}
          <input
            className={
              titleEmpty.length === 0 ? style.input_error : style.input
            }
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={(e) => handlerChangeTitle(e)}
          />
        </div>
        <div className={style.container_input}>
          <p>Description:</p>
          {descriptionEmpty.length === 0 || descriptionEmpty === undefined ? (
            <div className={style.errorMessage}>"This field is empty"</div>
          ) : (
            <div></div>
          )}
          <input
            className={
              descriptionEmpty.length === 0 ? style.input_error : style.input
            }
            type="text"
            name="description"
            placeholder="Enter description"
            onChange={(e) => handlerChangeDescription(e)}
          />
        </div>
        <div className={style.container_button}>
          <input type="submit" className={style.button} value="Create"></input>
        </div>
      </form>
      <Main />
    </div>
  );
};

export default Title;
