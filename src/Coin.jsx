import React from "react";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="row coinrow">
      <div className="col">
        <label>
          <img src={image} alt="crypto" className="mr-3" />
          <div className="colname">{name}</div>
        </label>
      </div>
      <div className="col">
        {" "}
        <p className="coin-symbol text-center">{symbol.toUpperCase()}</p>
      </div>
      <div className="col">
        {" "}
        <p className="coin-price">${price}</p>
      </div>
      <div className="col">
        <p className="coin-volume">${volume.toLocaleString()}</p>
      </div>
      <div className="col">
        {" "}
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}
      </div>
      <div className="col">
        {" "}
        <p className="coin-marketcap">{marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
