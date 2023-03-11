import React, { useState } from "react";
import Usecontext2 from "./Usecontext2";

export const studentContext = React.createContext([]);

export default function UseContext1() {
  const [value, setValue] = useState("");

  const [studentValues, setstudentValues] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submitChange = (e) => {
    e.preventDefault();
    setstudentValues( [...studentValues, value]);
  };
  return (
    <>
      <form onSubmit={submitChange}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <studentContext.Provider value={studentValues}>
        <Usecontext2 />
      </studentContext.Provider>
    </>
  );
}
