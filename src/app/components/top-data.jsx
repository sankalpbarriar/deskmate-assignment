import React from 'react';

function TopData() {
  return (
    <div className='my-3 p-6 bg-white/50 h-auto sm:h-[190px] flex gap-6 items-center justify-between mx-5 rounded-lg'>
      <div className='flex flex-col justify-center items-center mx-6'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>80</h1>
        <p>Total Beds in PG</p>
      </div>
      <div className='flex flex-col justify-center items-center text-green'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>17</h1>
        <p>Total Available Beds</p>
      </div>
      <div className='flex flex-col justify-center items-center text-yellow'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>04</h1>
        <p>Vacating in 60 days</p>
      </div>
      <div className='flex flex-col justify-center items-center text-red'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>45</h1>
        <p>Total Occupied Beds</p>
      </div>
    </div>
  );
}

export default TopData;
