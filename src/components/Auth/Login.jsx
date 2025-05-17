import React, {useState} from 'react';


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitHanlder(e){
        e.preventDefault();
        props.handleLogin(email,password);
        
        setEmail('');
        setPassword('');
        
    }

    return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form onSubmit={ e => submitHanlder(e)} className='flex flex-col justify-center items-center'>
            
            <input onChange={ e => setEmail(e.target.value) } value={email} required className=" text-white text-xl outline-none bg-transparent border-2 rounded-full border-emerald-600 px-4 py-3 placeholder:text-gray-400" type="email" placeholder='Enter your email'></input>
            <input onChange={ e=> setPassword(e.target.value) } value={password} required className=" text-white text-xl outline-none bg-transparent border-2 rounded-full border-emerald-600 px-4 py-3 placeholder:text-gray-400 mt-3" type="password" placeholder='Enter password'></input>
            <button className=" text-white text-lg font-semibold border-none outline-none border-2 rounded-full bg-emerald-600 hover:bg-emerald-700 w-full px-8 py-2 placeholder:text-white mt-7">Log In</button>
            
            </form>
        </div>
    </div>
    )
}

export default Login;