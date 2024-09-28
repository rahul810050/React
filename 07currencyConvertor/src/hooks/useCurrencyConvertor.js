// src/hooks/useCurrencyConvertor.js
import { useEffect, useState } from "react";

function useCurrencyConvertor(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      })
      .catch((err) => {
        console.error("Error fetching currency data: ", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyConvertor;
