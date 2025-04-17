import React, { useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBook] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBook(data);
      });
  });

  return (
    <div>
      <h1>hello book</h1>
    </div>
  );
};

export default Books;
