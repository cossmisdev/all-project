import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/slices/todo";

const ListProduct = () => {
  const todo = useSelector((state) => state.todo.todo);

  const dispath = useDispatch();
  console.log(todo);

  return (
    <div id="list">
      <div className="container">
        <div className="list">
          <div className="cards">
            {todo.map((el) => (
              <div className="card">
                <img src={el.image} alt="" />
                <h4>name:{el.name}</h4>
                <h4>last name:{el.lastName}</h4>
                <button onClick={() => dispath(deleteTodo(el.id))}>
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
