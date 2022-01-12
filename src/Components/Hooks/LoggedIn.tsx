import React,{useState} from 'react'

const LoggedIn = () => {
    const [isLoggedIn,setisLoggedIn]=useState(false)

    const handleLogin=()=>{
        setisLoggedIn(true)
    }
    const handleLogout=()=>{
        setisLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>User is {isLoggedIn ? "LoggedIn" :"LoggedOut"}</div>
        </div>
    )
}

export default LoggedIn
