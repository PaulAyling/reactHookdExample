import React, { useContext } from 'react';
import { BookContext } from './BookContext';

export default function Booklist(props) {
  const { books } = useContext(BookContext);

  return (
    <div>
      {books.map((book) => {
        return <h1 key={book.id} >{book.title}</h1>;
      })}
    </div>
  );
}
