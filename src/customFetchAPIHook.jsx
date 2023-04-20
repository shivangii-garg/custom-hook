import React from "react";
import { useState, useEffect } from "react";

const useFetchAPIHook = (api) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsError(false);
        setIsLoading(false);
        console.log(products);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        setProducts([]);
      });
  }, []);
  return { products, isLoading, isError };
};

export default useFetchAPIHook;
