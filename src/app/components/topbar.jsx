import React from 'react';

function TopBar() {
  return (
    <header className='my-6 flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-sm mx-4'>
      <h2 className='text-xl sm:text-2xl font-semibold mb-2 sm:mb-0'>Rooms Management</h2>
      <input
        className='p-2 text-sm border rounded-md w-full sm:w-auto'
        type='text'
        placeholder='Search Room no.'
      />
    </header>
  );
}

export default TopBar;
