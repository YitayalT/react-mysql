import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3001/books");  
                setBooks(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllBooks();
    }, []);
  return (
      <div>
      <h1>Book Shope</h1>
      <div className='books'>
        {books.map((book) => (
            <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt = '' />}
           <h2>{book.title}</h2>
           <p>{book.description}</p>
           <span>{book.price}</span>
            </div>
        ))}
      </div>
      <button>Add New Book</button>
      </div>
  )
}

export default Books