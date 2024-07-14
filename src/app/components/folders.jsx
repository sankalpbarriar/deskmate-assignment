import React from 'react';

function Folder({ floor, rooms, floors, selectedFloor, onSelectFloor }) {
  const getImageSrc = (status) => {
    switch (status) {
      case 'occupied':
        return '/Frame 328.jpg';
      case 'available for booking':
        return '/Frame 327.jpg';
      case 'vacating in 60 days':
        return '/Frame 497.jpg';
      default:
        return '';
    }
  };

  const roomsByColumn = [rooms.slice(0, 5), rooms.slice(5, 10), rooms.slice(10, 15)];

  return (
    <div className="relative">
      <div className="absolute -top-6 left-4 font-bold sm:text-lg text-sm bg-white/50 px-2 py-1 rounded-lg hidden sm:block">
        {floor}{floor === "3" ? "rd" : "th"} floor
      </div>
      
      {/* for Small Screens */}
      <div className="absolute -top-6 left-4 text-sm bg-white/50 px-2 py-1 rounded-lg sm:hidden">
        <select value={selectedFloor} onChange={(e) => onSelectFloor(e.target.value)} className="p-2 border rounded">
          {floors.map((floor, index) => (
            <option key={index} value={floor}>
              {floor}{floor === "3" ? "rd" : "th"} floor
            </option>
          ))}
        </select>
      </div>
      
      <div className="absolute -top-6 right-4 text-yellow bg-white/50 px-2 py-1 rounded-lg">
        <span className='text-xl sm:text-3xl tracking-tighter font-semibold'>
          {rooms.reduce((acc, room) => (room.status === 'vacating in 60 days' ? acc + room.beds : acc), 0)}
        </span> <span className='tracking-tight text-yellow sm:text-xl text-[10px]'>Vacating in 60 days</span>
      </div>
      
      {/* Room Display */}
      <div className="bg-white/50 bg-opacity-90 p-8 rounded-lg mt-8 overflow-auto max-h-[500px] sm:max-h-none">
        {rooms.length === 0 ? (
          <div className="text-center text-gray-500">No rooms found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {roomsByColumn.map((column, colIndex) => (
              <div key={colIndex} className="space-y-4">
                <div className="flex gap-9 mb-2 p-4 text-gray-400 text-sm">
                  <span>Room No.</span>
                  <span>Occupancy Availability</span>
                </div>
                {column.map((room, roomIndex) => (
                  <div key={roomIndex} className="flex gap-9 items-center p-4 rounded-lg">
                    <div className="flex mb-2 items-center">
                      <span className="font-bold">{room.number}</span>
                    </div>
                    <div className="flex items-center justify-center sm:space-x-2 space-x-4">
                      {Array.from({ length: room.beds }).map((_, bedIndex) => (
                        <img key={bedIndex} src={getImageSrc(room.status)} alt={room.status} className="w-7 h-7" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Folder;
