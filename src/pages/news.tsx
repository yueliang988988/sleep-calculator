import React from 'react'
import { NextPage } from 'next';
import RecentNewsDisplay from '../components/RecentNewsDisplay';



const news: NextPage = () => {
  return (
    <div
      className='flex flex-col justify-start items-start gap-4 p-2 w-full min-h-[300px]'
    >
      <h2 className='text-2xl text-gray-800 p-2'>
        Recent Articles
      </h2>

      <RecentNewsDisplay/>

    </div>
  )
}

export default news