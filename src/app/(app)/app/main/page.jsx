'use client';
import React, { useState } from 'react';
import data from '../../../../../public/data.json';
import TopBar from '@/app/components/topbar';
import Folder from '@/app/components/folders';
import TopData from '@/app/components/top-data';

function Page() {
  const { Floors } = data;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFloor, setSelectedFloor] = useState(Object.keys(Floors[0])[0]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSelectFloor = (floor) => {
    setSelectedFloor(floor);
  };

  const filterRooms = (rooms) => {
    return rooms.filter((room) => room.number.includes(searchQuery));
  };

  const floors = Floors.map((floor) => Object.keys(floor)[0]);
  const floorData = Floors.find((floor) => Object.keys(floor)[0] === selectedFloor);
  const rooms = Object.entries(floorData[selectedFloor]["room-no."]).map(([number, { beds, status }]) => ({
    number,
    beds,
    status,
  }));
  const filteredRooms = filterRooms(rooms);

  return (
    <>
      <TopBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <TopData />
      <div className="App p-4 space-y-4">
        <Folder 
          floor={selectedFloor} 
          rooms={filteredRooms} 
          floors={floors} 
          selectedFloor={selectedFloor} 
          onSelectFloor={handleSelectFloor} 
        />
      </div>
    </>
  );
}

export default Page;
