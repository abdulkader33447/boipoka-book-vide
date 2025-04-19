import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

  const [sort, setSort] = useState("");

  const data = useLoaderData();
  // console.log(data)

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData)
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBooks)
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    // console.log(myReadList);
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
      console.log(sortedByPage);
    }
    if (type === "rating") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="mt-26">
      <div className="bg-gray-100 p-5 rounded-lg mb-5">
        <h1 className="text-center text-2xl font-medium ">Books</h1>
      </div>
      <details className="dropdown grid justify-center ">
        <summary className="btn m-2 bg-[#23BE0A] text-white rounded-lg">
          sort by : {sort ? sort : ""}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-26 p-2 shadow-sm ">
          <li className="bg-[#23BE0A] text-white mb-2 rounded-lg">
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li className="bg-[#23BE0A] text-white rounded-lg">
            <a onClick={() => handleSort("rating")}>rating</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          <div className="grid sm:grid-cols-3">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
