import React from 'react';

const CatCart = ({name,img}) => {
  return (
    <div className='w-[150px] h-[100%] flex justify-center items-center flex-col'>
        <img src={img} className="h-[90px]" alt="" />
        <h1 className='text-[1.1rem] font-semibold'>{name}</h1>
    </div>
  )
}

export default CatCart;
