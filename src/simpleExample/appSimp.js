import React from 'react';
import BookContextProvider from './BookContext';
import Booklist from './Booklist';
import ThemeContextProvider from './ThemeContext';
import ThemeToggle from './ThemeToggle';

function AppSimp() {
  return (
    <ThemeContextProvider>
      <BookContextProvider>
        <Booklist />
        <ThemeToggle />
      </BookContextProvider>
    </ThemeContextProvider>
  );
}

export default AppSimp;
