import { useState } from 'react';

const Converter = () => {
  const [dollars, setDollars] = useState('');
  const [coins, setCoins] = useState(null);

  const handleDollarsChange = (event) => {
    setDollars(event.target.value);
  };


  const splitCoins = () => {
    const coins = dollars * 100;
    let quarter = Math.floor(coins / 25);
    let balance = coins % 25;
    let dime = Math.floor(balance / 10);
    balance = balance % 10;
    let nickel = Math.floor(balance / 5);
    balance = balance % 5;
    let penny = Math.floor(balance / 1);

    setCoins({ quarter, dime, nickel, penny });
  };


  return (
    <div>
      <label>Enter the number of dollars</label>
      <input value={dollars} onChange={handleDollarsChange}></input>
      <div>
        <button onClick={splitCoins}>Convert</button>
      </div>
    </div>
  );
};

export default Converter;
