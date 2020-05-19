import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  // equivalent to componentDidMount and componentWillUnmount
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date}</h2>
    </div>
  );
}

export default Clock;
