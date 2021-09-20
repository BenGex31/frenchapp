import React, { useState, createContext } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  
  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};
