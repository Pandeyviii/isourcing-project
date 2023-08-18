import React,{useEffect,useState} from 'react'
import "../Login/Login.css"
const Login = () => {
const[data,setData]=useState([])
useEffect(()=>{
    fetch("http://localhost:4000/user/getuser")
    .then(res=>res.json())
    .then(data=>console.log(data))
})
  return (
    <div className='container'>
        <h1>All users details</h1>
        <ul>
            {

            }
        </ul>
    </div>
  )
}

export default Login