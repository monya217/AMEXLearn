import React, { createContext, useState } from 'react';

export const CoinsContext = createContext();

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState(1190);

  const deductCoins = (amount) => {
    setCoins((prevCoins) => prevCoins - amount);
  };

  return (
    <CoinsContext.Provider value={{ coins, deductCoins }}>
      {children}
    </CoinsContext.Provider>
  );
};
