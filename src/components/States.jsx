import React, { useState } from "react";

const States = ({dataName}) => {
  // variable
  const a = "hello world";
  // states3223
  const [name, setName] = useState();
  console.log(name, "jjsdf");

  return (
    <div className="bg-white min-vh-100">
      <h1 onClick={() => setName(!name)}>
        {dataName}
      </h1>

      {name ? (
        ""
      ) : (
        <div>
          <h1>{a}</h1>
          <h1>{a}</h1>
          <h1>{a}</h1>
          <h1>{a}</h1>
        </div>
      )}
    </div>
  );
};

export default States;
