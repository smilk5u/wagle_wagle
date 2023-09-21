import React, { createContext, useContext, useState } from 'react';
const BgColor = createContext();
export const useBgColor = () => useContext(BgColor);

const BgColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState(false); // true 낮 / false 밤

  const changeBgColor = () => setBgColor(!bgColor)
  const changeDaytime = () => setBgColor(true)
  const changeNight = () => setBgColor(false)

  return (
    <BgColor.Provider value={{ bgColor, changeBgColor, changeDaytime, changeNight }}>
      {children}
    </BgColor.Provider>
  );
};

export default BgColorProvider;