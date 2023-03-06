import React from "react";
import { useSelector } from "react-redux";
import { ModalWindowProps } from "../../helper";
import { RootState } from "../../store/store";
import style from "./ModalTodo.module.css";

const ModalTodo = (props: ModalWindowProps) => {
  const todo = useSelector((state: RootState) => state.todo.todo);
  return (
    <div className={props.modalActive ? style.modal : style.hidden}>
      {todo.map((el) => (
        <div className={style.container_modal} key={el.id}>
          <h3>{el.title}</h3>
          <section className={style.description}>
            <p>Discription:</p>
            <p>{el.description}</p>
          </section>
          <section className={style.status}>
            <p>Status:</p>
            <input type="checkbox" checked={el.status} />
          </section>
          <section className={style.button}>
            <button onClick={() => props.setModalActive(false)}>close</button>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ModalTodo;
