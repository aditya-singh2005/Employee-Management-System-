  import React, {useState, useEffect} from 'react'

  const Header = (props) => {
    const [userName, setuserName] = useState('');

    
    function userLogOut(){
      localStorage.setItem("loggedInUser",'')
      props.changeUser('')
      // window.location.reload();
    }

    return (
      <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{userName}👋 </span></h1>
          <button onClick={userLogOut} className='bg-red-600 p-2 rounded-md text-lg font-medium'>Log Out</button>
      </div>
    )
  }

  export default Header