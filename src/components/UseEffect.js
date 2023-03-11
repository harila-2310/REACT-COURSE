import React, { useEffect, useState } from "react";

export default function UseEffect() {
  //https://jsonplaceholder.typicode.com/

  const [values, setValues] = useState([{}]);

  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setValues(json));
  }, [name]);

  return (
    <>
      <h1>{values.title}</h1>
      {name}
      <button onClick={() => setName("Harila")}>Add New</button>
    </>
  );
}
