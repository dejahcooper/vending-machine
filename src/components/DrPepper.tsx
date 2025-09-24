import React, { useState } from "react";
import { Link } from "react-router-dom";
import drpepper from "../assets/drpepper.jpg";

const DrPepper = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="main">
      <h2>
        {" "}
        You've had {clickCount} {clickCount == 1 ? "can" : "cans"} of Dr.
        Pepper!{" "}
      </h2>
      <img src={drpepper} alt="Dr. Pepper" />
      <button onClick={handleClick}> BUY ONE!</button>
      <Link to="/"> GO BACK </Link>
    </div>
  );
};

export default DrPepper;
