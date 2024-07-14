import data from '../../../public/data.json';

function TopData() {
  const { Floors } = data;
  const totalBeds = Floors.reduce((total, floor) => {
    const floorNumber = Object.keys(floor)[0];
    return total + Object.values(floor[floorNumber]['room-no.']).reduce((acc, room) => acc + room.beds, 0);
  }, 0);

  const totalAvailableBeds = Floors.reduce((total, floor) => {
    const floorNumber = Object.keys(floor)[0];
    return total + Object.values(floor[floorNumber]['room-no.']).reduce((acc, room) => room.status === 'available for booking' ? acc + room.beds : acc, 0);
  }, 0);

  const totalVacatingBeds = Floors.reduce((total, floor) => {
    const floorNumber = Object.keys(floor)[0];
    return total + Object.values(floor[floorNumber]['room-no.']).reduce((acc, room) => room.status === 'vacating in 60 days' ? acc + room.beds : acc, 0);
  }, 0);

  const totalOccupiedBeds = Floors.reduce((total, floor) => {
    const floorNumber = Object.keys(floor)[0];
    return total + Object.values(floor[floorNumber]['room-no.']).reduce((acc, room) => room.status === 'occupied' ? acc + room.beds : acc, 0);
  }, 0);

  return (
    <div className='sm:my-3 sm:p-6 p-2 bg-white/50 h-auto sm:h-[190px] flex sm:flex-row flex-row sm:gap-6 gap-1 items-center justify-between sm:mx-5 mx-2 rounded-lg'>
      <div className='flex flex-col items-center mx-3 text-center'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>{totalBeds}</h1>
        <p className='text-[10px] sm:text-sm'>Total Beds in PG</p>
      </div>
      <div className='flex flex-col justify-center items-center text-green mx-3 text-center'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>{totalAvailableBeds}</h1>
        <p className='text-[10px] sm:text-sm'>Total Available Beds</p>
      </div>
      <div className='flex flex-col justify-center items-center text-yellow mx-3 text-center'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>{totalVacatingBeds}</h1>
        <p className='text-[10px] sm:text-sm'>Vacating in 60 days</p>
      </div>
      <div className='flex flex-col justify-center items-center text-red mx-3 text-center'>
        <h1 className='text-3xl sm:text-5xl font-bold p-2'>{totalOccupiedBeds}</h1>
        <p className='text-[10px] sm:text-sm'>Total Occupied Beds</p>
      </div>
    </div>
  );
}

export default TopData;
