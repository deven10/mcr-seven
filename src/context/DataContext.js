import React, { createContext, useState } from "react";
import { data } from "../data/Data";

export const ContextData = createContext();

export const DataContext = ({ children }) => {
  const [allData, setAllData] = useState(data);
  return (
    <ContextData.Provider value={{ allData, setAllData }}>
      {children}
    </ContextData.Provider>
  );
};
