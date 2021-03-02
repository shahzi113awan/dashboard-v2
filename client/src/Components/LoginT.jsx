import React, { useState, useEffect } from 'react'
import logo from '../assets/images/pp.jpg'
import { firebase } from '../Config'

export default function LoginT() {
  const [loginInfo, setLoginInfo] = useState({})
  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }
  console.log(loginInfo.password)
  console.log(loginInfo.email)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    })
  }, [1])
  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        // setspinner(false);
        console.log(error)
        alert('Invalid Credentials', error)
      })
  }
  return (
    <div class='wrapper fadeInDown mt-5'>
      <div id='formContent'>
        <div class='fadeIn first'>
          <img src={logo} id='icon' alt='User Icon' />
        </div>

        <form>
          <input
            onChange={handleChange}
            type='email'
            id='login'
            class='inputT fadeIn second'
            name='email'
            placeholder='Email'
          />
          <input
            onChange={handleChange}
            type='password'
            id='password'
            class='inputT fadeIn third'
            name='password'
            placeholder='password'
          />
          <input
            type='button'
            onClick={handleSubmit}
            class='inputT fadeIn fourth'
            value='Log In'
          />
        </form>

        <div id='formFooter'>
          {/* <a class="underlineHover" href="#">Forgot Password?</a> */}
        </div>
      </div>
    </div>
  )
}
