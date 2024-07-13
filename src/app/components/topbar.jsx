import React from 'react';
import { Search, List } from 'lucide-react'; // Import Lucide Search and List icons

function TopBar() {
  return (
    <header className='my-6 flex flex-row justify-between items-center rounded-sm mx-4'>
      <h2 className='text-lg sm:text-xl font-semibold'>Rooms Management</h2>
      <div className="relative">
        <div className="absolute left-2 top-3 text-gray-500 pointer-events-none">
          <Search size="15px" />
        </div>
        <input
          className='p-2 pl-10 pr-12 text-sm border rounded-md w-full sm:placeholder:block md:placeholder:block lg:placeholder:block xl:placeholder:block'
          type='text'
          placeholder='Search Room no.'
        />
        <div className="absolute right-3 top-3 text-gray-500 pointer-events-none">
          <List size="20px" />
        </div>
      </div>
    </header>
  );
}

export default TopBar;