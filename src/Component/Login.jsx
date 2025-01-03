import React from 'react'
import './style.css'
import GoogleButton from 'react-google-button'
import { auth,provider } from '../FireBase/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'

function Login() {

  function LoginWithEmail(){
    signInWithPopup(auth, provider)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  function LogOut(){
    signOut(auth)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div>
       <div className='Login-form'>
        <form  onSubmit={LogOut} >
          <label htmlFor="useName">Email<span>*</span></label>
          <input type="email" placeholder='Enter your Email..' />
          <label htmlFor="usePass">Password<span>*</span></label>
          <input type="Password" placeholder='Enter your Password...' />
          <button type='submit'>LogOut</button>
        </form>
        <hr/>
        <GoogleButton style={{marginTop:"10px",textAlign:"center" ,marginLeft:"10px"}}  onClick={LoginWithEmail}/>
       </div>
    </div>
  )
}

export default Login
