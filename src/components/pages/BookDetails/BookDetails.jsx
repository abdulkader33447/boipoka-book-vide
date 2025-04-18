import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id)

  const paramsId = parseInt(id);
  // console.log(paramsId)

  const data = useLoaderData();
  // console.log(data)

  const singleBook = data.find((book) => book.bookId === paramsId);
  // console.log(singleBook);

  const {
    bookName,
    image,
    publisher,
    yearOfPublishing,
    author,
    totalPages,
    category,
    tags,
    rating,
    review,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    // store with id
    // where to store
    // array or collection
    // if book already exist, the show a alert
    // if book not exist, then push in the collection or array

    addToStoredDB(id);
  };

  return (
    <div className="flex sm:flex-row flex-col items-center justify-between m-5 gap-5 min-h-[calc(100vh-323px)]">
      <div className="w-12/12 bg-gray-100 place-content-center sm:p-10 p-3 rounded-xl">
        <img className="" src={image} alt="" />
      </div>
      <div className="description">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="mb-2">By : {author}</p>
        <p>{category}</p>
        <p>
          <span className="text-[15px] font-bold">Review : </span>
          {review}
        </p>
        <div className="flex justify-start gap-4 font-medium my-4">
          Tag:
          {tags.map((tag, index) => (
            <p key={index} className="text-[#23BE0A]">
              {tag}
            </p>
          ))}
        </div>

        <p className="mb-3">
          Total Pages :{" "}
          <span className="font-medium sm:ml-20  ml-10">{totalPages}</span>
        </p>

        <p className="mb-3">
          publisher :{" "}
          <span className="font-medium sm:ml-23 ml-10">{publisher}</span>
        </p>

        <p className="mb-3">
          year Of Publishing :{" "}
          <span className="font-medium sm:ml-7 ml-10">{yearOfPublishing}</span>
        </p>

        <p className="mb-3">
          Rating : <span className="font-medium sm:ml-27 ml-10">{rating}</span>
        </p>

        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn hover:btn-outline hover:text-[#23BE0A] hover:border-[#23BE0A] sm:mr-7 mr-4"
        >
          Mark as Read
        </button>
        <button className="btn hover:btn-outline hover:text-[#23BE0A] hover:border-[#23BE0A]">
          Add to Wish List
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
