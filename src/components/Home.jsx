import React, { useState } from "react";
import CryptoTile from "./CryptoTile";
import BuyForm from "./BuyForm";

import btc from "../assets/BTC.png";
import eth from "../assets/ETH.png";
import xem from "../assets/XEM.png";

const Home = () => {
  const tiles = [
    { id: 1, icon: btc, name: "BTC", rate: 3834 },
    { id: 2, icon: eth, name: "ETH", rate: 1394 },
    { id: 3, icon: xem, name: "XEm", rate: 0.2708 },
  ];

  const [selectedTile, setSelectedTile] = useState(tiles[0]);

  const handleSelect = (data) => {
    setSelectedTile(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            {tiles.map((tile) => (
              <CryptoTile
                key={tile.id}
                data={tile}
                selected={tile.id === selectedTile.id}
                onClick={handleSelect}
              />
            ))}
          </div>
          <BuyForm />
        </div>
        <div className="col-6">2</div>
      </div>
    </div>
  );
};

export default Home;
