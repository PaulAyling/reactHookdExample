import React, { useContext } from 'react';
import { SimpleContext } from './simpleContext';

export default function Booklist(props) {
  const { books } = useContext(SimpleContext);

  return (
    <div>
      {books.map((book) => {
        return <h1 key={book.id} >{book.title}</h1>;
      })}
    </div>
  );
}
