import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
  // const data = use(bookPromise);
  // console.log(data);

  console.log(singleBook);

  const {author,bookName,category,image,rating}=singleBook;

  return (
    <div className="card bg-base-100 sm:w-96 shadow-sm sm:p-5 p-3">
  <figure className="bg-gray-100 sm:py-7 sm:px- p-10 rounded-xl">
    <img className="sm:w-40 w-35 sm:h-60 h-50"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Book Name : 
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge">Category: {category}</div>
      <div className="badge">Rating {rating}<FaStarHalfAlt className="text-red-500" /></div>
    </div>
  </div>
</div>
  );
};

export default Book;
