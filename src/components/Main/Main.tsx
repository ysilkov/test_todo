import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import style from "./Main.module.css";
import { useDispatch } from "react-redux";
import { changeStatusTodo, chooseTodo } from "../../store/todoReducer";
import ModalTodo from "../ModalTodo/ModalTodo";

const Main = () => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const changeStatus = (id: number) => {
    dispatch(changeStatusTodo(id));
  };
  const chooseTodoTable = (id: number) => {
    !modalActive ? setModalActive(true) : setModalActive(false);
    dispatch(chooseTodo(id));
  };
  return (
    <>
      <table>
        <colgroup>
          <col className={style.id} />
          <col className={style.title} />
          <col className={style.description} />
          <col className={style.status} />
        </colgroup>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody id="todo-table">
          {todoList.map((todo) => (
            <tr key={todo.id} id={todo.id.toString()}>
              <td className={style.id} onClick={() => chooseTodoTable(todo.id)}>
                {todo.id}
              </td>
              <td
                className={style.title}
                onClick={() => chooseTodoTable(todo.id)}
              >
                {todo.title}
              </td>
              <td
                className={style.description}
                onClick={() => chooseTodoTable(todo.id)}
              >
                {todo.description}
              </td>
              <td className={style.status}>
                <input
                  type="checkbox"
                  onClick={() => changeStatus(todo.id)}
                  checked={todo.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalTodo modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
};

export default Main;
