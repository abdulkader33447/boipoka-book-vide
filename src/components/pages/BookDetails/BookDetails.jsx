import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const {id}  = useParams();
  // console.log(id)

  const paramsId = parseInt(id);
  // console.log(paramsId)

  const data = useLoaderData();
  // console.log(data)

  const singleBook = data.find((book) => book.bookId === paramsId);
  // console.log(singleBook);

  const {bookName,image} = singleBook;
  
  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h2>Name : {bookName}</h2>
      <button className="btn btn-outline hover:text-[#23BE0A] hover:border-[#23BE0A] mr-7">Read</button>
      <button className="btn btn-outline hover:text-[#23BE0A] hover:border-[#23BE0A]">Wish List</button>
    </div>
  );
};

export default BookDetails;
