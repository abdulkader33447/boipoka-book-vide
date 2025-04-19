import React from "react";
import Bannerimg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="bg-[#13131317] sm:flex items-center justify-around sm:p-16 p-10  my-10 rounded-xl mt-26">
      <div className="mb-10">
        <h1 className="sm:text-4xl font-bold">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn mt-5  bg-[#23BE0A] text-white">
          View The List
        </button>
      </div>
      <div>
        <img className="sm:w-70 w-40" src={Bannerimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
