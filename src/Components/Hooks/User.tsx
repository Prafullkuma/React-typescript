import React, { useState } from 'react'

interface AuthUser{
    name:string,
    email:string
}

const User = () => {
    const [user,setUser]=useState<AuthUser>()  // for future state value can be changed //Second type assertion
    const handleLogin=()=>{
        setUser({
            name:"prafull",
            email:"prafull.kumar.45@gmail.com"
        })
    }
    const handleLogout=()=>{
        setUser({name:"7",email:""}) 
    }   
    return (
        <div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Login</button>
                <div>User name is{user?.name}</div>
                <div>User email is{user?.email}</div>
        </div>
    )
}

export default User
