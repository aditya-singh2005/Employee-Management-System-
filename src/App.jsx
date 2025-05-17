import React, {useContext, useEffect, useState} from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

function App() {

    const [user,setUser] = useState(null);
    const [loggedInUserData, setloggedInUserData] = useState(null);
    const [userData,setuserData] = useContext(AuthContext);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if(loggedInUser){
            const userData = JSON.parse(loggedInUser);
            setUser(userData.role);
            setloggedInUserData(userData.data);
        }
    }, []);

    const handleLogin = (email,password) => {
        if(email=="admin@me.com" && password=="123"){
            setUser("admin")
            setloggedInUserData({role: 'Admin'})
            localStorage.setItem("loggedInUser",JSON.stringify({role: "admin"}))
        } else if(userData){
            const employee = userData.find((e)=> email==e.email && password==e.password)
            if(employee){
                setUser("employee")
                setloggedInUserData(employee)
                console.log(loggedInUserData);
                console.log(userData);
                
                
                localStorage.setItem("loggedInUser",JSON.stringify({role: "employee", data: employee}))
            }
        } else {
            alert("Invalid Credentials")
        }
    }
        
    return ( 
        <>
        {!user ? <Login handleLogin={handleLogin}/> : null}
        {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
        </>
     )
}

export default App;