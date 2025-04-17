import React from 'react';
import Bannerimg from '../../assets/pngwing 1.png'

const Banner = () => {
  return (
    <div className='bg-[#13131317] flex items-center justify-around'>
      <div>
        <h1>Books to freshen up your bookshelf</h1>
        <button className='btn'>View The List</button>
      </div>
      <div>
        <img src={Bannerimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;