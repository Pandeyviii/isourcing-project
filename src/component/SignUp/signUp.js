import React,{useState} from 'react'
import "./signUp.css"
import axios from 'axios'

const Signup = () => {
    const[user,setUser]=useState({
        name:"",
        email:"",
        username:"",
        contact:"",
        picture:""
    })
    const Handlers=(e)=>{
        const{name,value}=e.target;
        console.log(name,value);
        setUser({
            ...user,
            [name]:value

        })
    }
    const Register=()=>{
       axios.post("http://localhost:4000/user/adduser",user)
       .then((res)=>{
        alert(res.data.message)
        console.log(res);
       })
    }
  return (
    <div className='container'>
        {console.log(user)};
        <h2 className='text-center py-3'>SignUp page</h2>
        <div className='row py-3'></div>
        <div className='col-6'>
            <div className='form-group py-3'>
                <label>Person Name</label>
                <input name='name' value={user.name} className='form-control' type='text' onChange={Handlers}></input>
            </div>
            <div className='form-group py-3'>
                <label>Email id</label>
                <input name='email' value={user.email} className='form-control' type='email' onChange={Handlers}></input>
            </div>
            <div className='form-group py-3'>
                <label>UserName</label>
                <input name='username' value={user.username} className='form-control' type='text' onChange={Handlers}></input>
            </div>
            <div className='form-group py-3'>
                <label>Contact Info</label>
                <input name='contact' value={user.contact} className='form-control' type='number' onChange={Handlers}></input>
            </div>
            <div className='form-group py-3 text-center'>
                <label>Profile Picture</label>
                <input name='picture' value={user.picture} className='form-control-file' type='file' onChange={Handlers}></input>
            </div>
        </div>
        <div className='bg-primary  text-center'><button onClick={Register}> SignUp</button></div>
    </div>
  )
}

export default Signup