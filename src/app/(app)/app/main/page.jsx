'use client';
import React, { useState } from 'react';
import data from '../../../../../public/data.json';
import TopBar from '@/app/components/topbar';
import Folder from '@/app/components/folders';
import TopData from '@/app/components/top-data';


function Page() {
  const { Floors } = data;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filterRooms = (rooms) => {
    return rooms.filter((room) => room.number.includes(searchQuery));
  };

  return (
    <>
      <TopBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <TopData />
      <div className="App p-4 space-y-4">
        {Floors.map((floorData, floorIndex) => {
          const floorNumber = Object.keys(floorData)[0];
          const rooms = Object.entries(floorData[floorNumber]["room-no."]).map(([number, { beds, status }]) => ({
            number,
            beds,
            status,
          }));
          const filteredRooms = filterRooms(rooms);
          return <Folder key={floorIndex} floor={floorNumber} rooms={filteredRooms} />;
        })}
      </div>
    </>
  );
}

export default Page;
