import React, { useState } from "react";

export default function Usestat() {
  const [studentDetails, setstudentDetails] = useState([
    { id: 1, name: "Hari" },
  ]);
  const addStudent = () => {
    setstudentDetails([
      ...studentDetails,
      { id: studentDetails.length + 1, name: "Prasath" },
    ]);
  };
  return (
    <div>
      <ul>
        {studentDetails.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}
