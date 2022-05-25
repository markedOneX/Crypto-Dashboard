import { useState, useEffect } from "react";
import Coin from "./Coin";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row coin-search">
        <h1>SEARCH CRYPTO</h1>
        <input
          className="coin-input form-control"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div>
        <div className="row">
          <div className="col">
            <h5>Name</h5>
          </div>
          <div className="col">
            <h5>Symbol</h5>
          </div>
          <div className="col">
            <h5>Price</h5>
          </div>
          <div className="col">
            <h5>Volume</h5>
          </div>
          <div className="col">
            <h5>Change%</h5>
          </div>
          <div className="col">
            <h5>MktCap</h5>
          </div>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default App;
