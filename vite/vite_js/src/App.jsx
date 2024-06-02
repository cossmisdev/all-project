import { Route } from "react-router-dom";
import "./App.css";
import Table from "./compament/Table/Table";

function handle() {
  alert("hello");
}

function App() {
  return (
    <>
      <Table handle={handle} />
    </>
  );
}

export default App;
