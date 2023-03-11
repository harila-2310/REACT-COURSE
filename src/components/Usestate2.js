import React, { useState } from "react";

export default function Usestate2() {
  const [message, setmessage] = useState("");
  const Message = () => {
    return (
      <>
        <h1>Welcome,{message}</h1>
      </>
    );
  };

  const handleChange = (e) => {
    setmessage(e.target.value);
  };

  return (
    <div>
      <h1>Login Here</h1>
      <input type="text" onChange={handleChange} value={message} />
      <button>Signin</button>
      {<Message />}
    </div>
  );
}
