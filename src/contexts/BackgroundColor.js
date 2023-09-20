import React, { createContext, useContext, useState } from 'react';
const BgColor = createContext();
export const useBgColor = () => useContext(BgColor);

const BgColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState(true);

  const changeBgColor = () => {
    setBgColor(!bgColor);
  };

  return (
    <BgColor.Provider value={{ bgColor, changeBgColor }}>
      {children}
    </BgColor.Provider>
  );
};

export default BgColorProvider;