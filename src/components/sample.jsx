import React, { useEffect, useState } from "react";
import axios from "axios";

function Textbooks() {
  const [books, setBooks] = useState([]);
  const classNumber = 10;

  useEffect(() => {
    fetchTextbooks();
  }, []);

  const fetchTextbooks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8001/api/textbook/textbooksshowbyclass/${classNumber}`
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching textbooks:", error);
    }
  };

  return (
    <div>
      <h2>Textbooks</h2>

      {books.length === 0 ? (
        <p>No textbooks found</p>
      ) : (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.subject}</h3>
            <p>Part: {book.part}</p>

            <a href={book.file_url} target="_blank" rel="noreferrer">
              View PDF
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default Textbooks;