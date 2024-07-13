import TopData from '@/app/components/top-data';
import TopBar from '@/app/components/topbar';
import React from 'react';
import data from '../../../../../public/data.json';
import Folder from '@/app/components/folders';

function Page() {
  const { Floors } = data;

  return (
    <>
      <TopBar />
      <TopData />
      <div className="App p-4 space-y-4">
        {Floors.map((floorData, floorIndex) => {
          const floorNumber = Object.keys(floorData)[0];
          const rooms = Object.entries(floorData[floorNumber]["room-no."]).map(([number, { beds, status }]) => ({
            number,
            beds,
            status,
          }));
          return <Folder key={floorIndex} floor={floorNumber} rooms={rooms} />;
        })}
      </div>
    </>
  );
}

export default Page;
