import axios from "axios";
import { useState, useEffect, useRef } from "react";

const config = {
  headers: {
    "x-chain": "solana",
    "X-API-KEY": "2d8edb01ad4944b5a9ebf46346b1eaf7",
  },
};

function BotmanPrice() {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      // STUFF ONLY HAPPENS ONCE
      // Before calling the API
      setLoading(true);
      axios
        .get(
          "https://public-api.birdeye.so/defi/price?address=2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK",
          config
        )
        .then((res) => {
          setPrice(res.data.data.value);
          // After response is received
          setLoading(false);
        });
    }
  }, [price]);

  return (
    <div className="price">
      <b>Botman: </b>
      {loading ? <>Loading..</> : "$" + price.toFixed(4)}
    </div>
  );
}

export default BotmanPrice;
