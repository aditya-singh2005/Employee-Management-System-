import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const [userData, setuserData] = useContext(AuthContext);
    const [taskIndexActive, setTaskIndexActive] = useState(null);
    

    const toggleActive = (index) => {
        if(taskIndexActive === index){
            setTaskIndexActive(null);
        }
        else {
            setTaskIndexActive(index);
        }
    }

  return (
    <div className='mt-5 p-5 bg-[#1c1c1c] rounded h-auto '>
        <div className='bg-red-500 mb-2 py-2 px-4 w-full flex justify-around rounded'>
            <h2 className='text-lg font-medium w-1/6'>Employee Name </h2>
            <h2 className='text-lg font-medium flex justify-center w-1/6'>New Task      </h2>
            <h2 className='text-lg font-medium flex justify-center w-1/6'>Active Task   </h2>
            <h2 className='text-lg font-medium flex justify-center w-1/6'>Completed     </h2>
            <h2 className='text-lg font-medium flex justify-center w-1/6'>Failed        </h2>
            <h2 className='text-lg font-medium w-1/6 flex justify-center'>All Tasks     </h2>
        </div>
        
            <div className='overflow-auto h-auto'>
                {userData.map((elem,idx)=>(
                    <div key={idx} >
                        <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                            <div className='text-lg font-medium  w-1/6'>{elem.firstName}                                              </div>
                            <div className='text-lg flex justify-center font-medium w-1/6 text-blue-400'>{elem.taskCounts.newTask}  </div>
                            <div className='text-lg flex justify-center font-medium w-1/6 text-yellow-400'>{elem.taskCounts.active} </div>
                            <div className='text-lg flex justify-center font-medium w-1/6 text-white'>{elem.taskCounts.completed}   </div>
                            <div className='text-lg flex justify-center font-medium w-1/6 text-red-600'>{elem.taskCounts.failed}    </div>
                            <button onClick={()=>{toggleActive(idx)}} className='rounded px-1 bg-green-200 w-[15%] text-black'>{taskIndexActive !== idx ? 'Show tasks':'Hide tasks' } <span><i className="fa-solid fa-lg fa-caret-down pl-1" style={{color: '#000000' }}></i> </span> </button>
                        </div>

                        { (taskIndexActive === idx) && (
                            <div className='mt-2 py-2 px-4 w-full '>
                                {elem.tasks
                                .filter( task => task.taskTitle)
                                .map( (task,taskIdx)=> (
                                    <div key={taskIdx} className='bg-emerald-500 w-full mb-2 px-4 py-2 rounded flex justify-between'>
                                        <div>
                                            <h1 className='text-xl font-bold text-gray-900'>{taskIdx+1}. {task.taskTitle}</h1>
                                            <h3 className='text-lg font-semibold text-gray-900 pl-6'>{task.taskDescription}.</h3>
                                        </div>
                                        <div className='items-center flex'>
                                            <button className='rounded py-2 px-4 bg-blue-500 mr-1 '>Edit</button>
                                            <button className='rounded py-2 px-4 bg-red-500 '>Delete</button>
                                        </div>
                                    </div>  
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
    </div>
  )
}

export default AllTask