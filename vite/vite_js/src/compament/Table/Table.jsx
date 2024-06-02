import React from "react";
import { Link } from "react-router-dom";

const Table = ({ handle }) => {
  return (
    <div>
      <Link to={"userTable"}>
        <h1>click</h1>
      </Link>
      <button onClick={() => handle()}>ghcghchcc</button>
    </div>
  );
};

export default Table;
