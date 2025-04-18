import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";


const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);

  // console.log(singleBook);

  const {
    author,
    bookName,
    bookId,
    category,
    image,
    rating,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 sm:w-96 mb-10 shadow-sm sm:p-5 p-3">
        <figure className="bg-gray-100 sm:py-7 sm:px- p-10 rounded-xl">
          <img className="sm:w-40 w-35 sm:h-60 h-50" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-8">
            {tags.map((tag, index) => (
              <button key={index} className="text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            Book Name :{bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Publisher : {publisher}</p>
          <div className="border border-dashed  border-gray-400"></div>
          <div className="card-actions justify-end">
            <div className="badge ">Category: {category}</div>
            <div className="badge">
              Rating {rating}
              <FaStarHalfAlt className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
