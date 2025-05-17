import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h2>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-6'>
            <button className='w-full rounded bg-green-500 text-sm py-1 px-2'>Failed</button>
        </div>
    </div> 
  )
}

export default FailedTask