import React, { useState } from "react";

export default function Usestate1() {
  const [name, setname] = useState(["John", "Micheal", "Harry"]);
  const Addstudent = () => {
    setname([...name, "Hari", "Prasath"]); 
    //Spread operator(...) used to add before array
    //or
    //setname(names=>[...names,"Hari","Prasath"])
  };
  return (
    <div>
      <div>
        <button onClick={Addstudent}>Add Student</button>
        <ul>
          {name.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
