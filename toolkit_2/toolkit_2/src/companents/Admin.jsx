import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todo";

let init = {
  name: "",
  lastName: "",
  image: "",
};

const Admin = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(init);

  function addTask() {
    let newTodo = {
      ...inputValue,
      id: Date.now(),
    };
    dispatch(addTodo(newTodo));
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="box">
            <h1>TODO</h1>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="LastName"
              onChange={(e) =>
                setInputValue({ ...inputValue, lastName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="image URL"
              onChange={(e) =>
                setInputValue({ ...inputValue, image: e.target.value })
              }
            />
            <button onClick={addTask}>create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
