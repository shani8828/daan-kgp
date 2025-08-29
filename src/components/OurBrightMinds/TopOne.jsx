import React from 'react'
import TopOneData from './TopOneData'
import BrightMindsCard from './BrightMindsCard'

const TopOne = () => {
  return (
    <>
      <div>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mb-2 dark:text-gray-300'>Top Performers from Each Batch</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            {TopOneData.map((item) => (
              <BrightMindsCard key={item.id} {...item} />
            ))}
        </div>
      </div>
    </>
  )
}

export default TopOne
