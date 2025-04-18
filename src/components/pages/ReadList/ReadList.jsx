import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

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
    setReadList(myReadList)
  }, []);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          {
            readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
