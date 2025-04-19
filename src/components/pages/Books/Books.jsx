import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBook] = useState([]);

  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllBook(data);
  //     });
  // });

  // const bookPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div className="text-2xl font-bold text-center mt-18 mb-14">
      <h1 className="mb-5">Books</h1>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid items-center justify-around gri md:grid-cols-2 lg:grid-cols-3 sm:gap-14">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
