import React from 'react'
import Header from '../others/Header'
import TaskDashboard from '../others/TaskDashboard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#ICICIC] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskDashboard data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard