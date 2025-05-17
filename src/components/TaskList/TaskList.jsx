import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    
return (
    <div id="TaskList" className='h-[50%] w-full flex items-center overflow-x-auto flex-nowrap justify-start gap-5 mt-16 py-1'>
        {data.tasks.map( (elem,idx) => {
            if(elem.active) return <AcceptTask key={idx} data={elem}/>
            if(elem.newTask) return <NewTask key={idx} data={elem}/>
            if(elem.completed) return <CompleteTask key={idx} data={elem}/>
            if(elem.failed) return <FailedTask key={idx} data={elem}/>
        })}
        
        
    </div>
)
}
export default TaskList