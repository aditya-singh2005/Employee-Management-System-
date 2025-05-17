import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h2>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-6'>
            <button className='w-full rounded text-sm bg-emerald-700 py-2 px-1'>Accept Task</button>
        </div>
    </div> 
  )
}

export default NewTask