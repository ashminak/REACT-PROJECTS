import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'

const SignUp = ({setIsLoggedIn}) => {
  return (
       <Template
       title="Join the millions learning to code with StudyNotion for free"
       desc1="Build Skill for today tomorrow and beyond"
       desc2="Education to future proof your career"
       formtype="signup"
       image={signupImg}
       setIsLoggedIn={setIsLoggedIn}
       />
  )
}

export default SignUp