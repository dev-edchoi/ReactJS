//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollors, setDollors] = useState(10);
  const [coinPrice ,setCoinPrice] = useState(1);

  const onChange = (event) => {    
    setDollors(event.target.value);
  }

  const onChangeCoin = (event) => {     
    setCoinPrice(event.target.value);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? null : coins.length}</h1>
      <input onChange={onChange} value={dollors} type="number" placeholder="i have..."/>
      <br/><br/>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>           
          <select onChange={onChangeCoin}>
            {coins.map((coin, idx) => (              
              <option key={idx} id={coins.symbol} value={coin.quotes.USD.price}>
                {coin.name}({coin.symbol}) : {coin.quotes.USD.price}
              </option>
            ))}
          </select>          
          <h3>I have : ${dollors}</h3>
          <h3>Coin Price : {coinPrice}</h3>
          <h1>I can buy : {dollors / coinPrice}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
