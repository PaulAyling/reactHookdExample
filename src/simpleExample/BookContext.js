import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'way of kings2', id: 1 },
    { title: 'Atlas Shrugged', id: 2 },
    { title: 'Marxism', id: 3 },
  ]);

  return <BookContext.Provider value={{ books }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
