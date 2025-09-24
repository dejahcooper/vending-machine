import { useState } from "react";
import { Link } from "react-router-dom";
import chips from "../assets/chips.jpg";

const Chips = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="main">
      <h2>
        You've had {clickCount} {clickCount == 1 ? "bag" : "bags"} of Chips!
      </h2>
      <img src={chips} alt="Chips" height={700} width={500} />
      <button onClick={handleClick}> BUY ONE! </button>
      <Link to="/"> GO BACK </Link>
    </div>
  );
};

export default Chips;
