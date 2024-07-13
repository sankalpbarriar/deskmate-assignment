import TopData from '@/app/components/top-data'
import TopBar from '@/app/components/topbar'
import React from 'react'
import  data from '../../../../../public/data.json'
import Folder from '@/app/components/folders'

function page() {
  const {Floors}=data;
  return (
    <>
    <TopBar/>
    <TopData/>
    {Floors.map((_, index) => (
        <Folder key={index} />
      ))}
    </>
    
  )
}

export default page