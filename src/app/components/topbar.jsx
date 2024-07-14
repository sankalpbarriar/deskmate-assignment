import React from 'react';
import { Search, List } from 'lucide-react'; 

function TopBar({ searchQuery, onSearchChange }) {
  return (
    <header className='my-6 flex flex-row justify-between items-center rounded-sm mx-4'>
      <h2 className='text-lg sm:text-xl font-semibold'>Rooms Management</h2>
      <div className="relative">
        <div className="absolute left-2 top-3 text-gray-500 pointer-events-none">
          <Search size="15px" />
        </div>
        <input
          type="text"
          placeholder="Search by room number..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="p-2 pl-10 pr-12 text-sm border rounded-md sm:w-full w-[5px] text-center  "
        />
        <div className="absolute right-3 top-3 text-gray-500 pointer-events-none text-center">
          <List size="15px"  />
        </div>
      </div>
    </header>
  );
}

export default TopBar;