import React from 'react';
import CatCart from '../UI/CatCart';
import c1 from '../assets/Category/1.webp';
import c2 from '../assets/Category/2.webp';
import c3 from '../assets/Category/3.webp';
import c4 from '../assets/Category/4.webp';
import c5 from '../assets/Category/5.jpg';
import c6 from '../assets/Category/6.jpg';
import c7 from '../assets/Category/7.jpg';
import c8 from '../assets/Category/8.jpg';
import c9 from '../assets/Category/9.jpg';




const Categories = () => {
  return (
    <div className='w-[100%] h-[30vh] p-[10px] bg-[#F1F2F4]'>
        <div className='w-[100%] h-[100%] bg-white'>
            <CatCart />
        </div>
    </div>
  )
}

export default Categories;
