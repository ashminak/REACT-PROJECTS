import React from 'react'
import loginImg from '../assets/login.png'
import Template from  '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build Skill for today tomorrow and beyond"
    desc2="Education to future proof your career"
    formtype="login"
    image={loginImg}
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login