import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setuserData] = useContext(AuthContext);

    const [taskTitle, settaskTitle] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [assignTo, setassignTo] = useState('');
    const [category, setcategory] = useState('');
    const [taskDescription, settaskDescription] = useState('');

    const [newTask, setNewTask] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        setNewTask({taskTitle, taskDate , assignTo , category, taskDescription,  active: false, newTask: true, failed: false, completed: false })

        const data = userData;

        data.forEach(function (elem) {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setuserData(data);
        console.log(data);
        console.log(userData)

        
        settaskTitle('')
        settaskDate('')
        setassignTo('')
        setcategory('')
        settaskDescription('')


    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 '>
    <form 
    onSubmit={handleSubmit}
    className='flex w-full flex-wrap justify-between items-start'>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                onChange={(e)=>{
                    settaskTitle(e.target.value);
                }}
                value={taskTitle}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI design '/>
            </div>
            <div>    
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                onChange={(e)=>{
                    settaskDate(e.target.value);
                }}
                value={taskDate}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date"></input>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input 
                onChange={(e)=>{
                    setassignTo(e.target.value);
                }}
                value={assignTo}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee name'></input>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                onChange={(e)=>{
                    setcategory(e.target.value);
                }}
                value={category}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='design,dev etc'></input>
            </div>
        </div>

        <div className='w-2/5 flex flex-col items-start '>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            onChange={(e)=>{
                settaskDescription(e.target.value);
            }}
            value={taskDescription}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none text-black border-[1px] border-gray-400'/>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded mt-4 w-full bold text-sm '>Create Task</button>
        </div>
        
        </form>
    </div>
  )
}

export default CreateTask