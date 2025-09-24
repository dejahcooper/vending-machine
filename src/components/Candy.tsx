import { useState } from "react";
import { Link } from "react-router-dom";
import candy from "../assets/candy.webp";

const Candy = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="main">
      <h2>
        You've had {clickCount} {clickCount == 1 ? "bag" : "bags"} of candy!
      </h2>
      <img src={candy} alt="Candy" height={700} width={500} />
      <button onClick={handleClick}> BUY ONE!</button>
      <Link to="/"> GO BACK </Link>
    </div>
  );
};
export default Candy;
