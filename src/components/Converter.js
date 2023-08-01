import { useState } from 'react';
import './Converter.css';

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
    <div className='converter'>
      <div className='top'>
        <h1>Dollars to cents converter</h1>
        <label>Enter the number of dollars</label>
        <input value={dollars} onChange={handleDollarsChange}></input>
        <button onClick={splitCoins}>Convert</button>
      </div>
      {coins && (
        <div>
          <div className='parameter-row'>
            <span className='parameter-label'>Coins</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Quarters</span>
            <span className='parameter-value'>{coins.quarter}</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Dimes</span>
            <span className='parameter-value'>{coins.dime}</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Nickels</span>
            <span className='parameter-value'>{coins.nickel}</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pennies</span>
            <span className='parameter-value'>{coins.penny}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Converter;
