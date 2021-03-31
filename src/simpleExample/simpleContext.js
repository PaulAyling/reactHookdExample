import React, { useState, createContext } from 'react';

export const SimpleContext = createContext();

const SimpleContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'way of kings', id: 1 },
    { title: 'Atlas Shrugged', id: 2 },
    { title: 'Marxism', id: 3 },
  ]);
  return <SimpleContext.Provider value={{ books }}>{props.children}</SimpleContext.Provider>;
};

export default SimpleContextProvider;
