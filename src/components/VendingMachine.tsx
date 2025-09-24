import { Link } from "react-router-dom";
import vendingmachine from "../assets/vendingmachine.jpg";
import "../VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="vending-machine">
      <div className="vending-machine-greeting">
        <h1>Hello! I am a vending machine. What would you like?</h1>
      </div>
      <div className="vending-machine-items">
        <Link to="/drpepper">Dr. Pepper</Link>
        <Link to="/candy">Candy</Link>
        <Link to="/chips">Chips</Link>
      </div>
      <div>
        <img
          src={vendingmachine}
          alt="Vending Machine"
          height={800}
          width={600}
        />
      </div>
    </div>
  );
};

export default VendingMachine;
