import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(10);

  const handleDecrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert("Number can't be negative");
    }
  };

  const handleIncrease = () => {
    if (number < 20) {
      setNumber(number + 1);
    } else {
      alert("Number can't be more than 20");
    }
  };

 return (
        <div className="counter">
            <div className="buttons-wrapper">
                <button onClick={() => handleDecrease()}>-</button>
                <span>{number}</span>
                <button onClick={() => handleIncrease()}>+</button>
            </div>

            {
                number > 15 ? <div>Numbers above 15 are not recommended</div> : ''
            }

            {
                number < 5 ? <div>Numbers below 5 are not recommended</div> : ''
            }
        </div>
    )
}


export default Counter;
