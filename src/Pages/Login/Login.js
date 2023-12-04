import React from 'react'
import './login.css'
import Input from '../../Components/ui/Input'

const Login = () => {
  const [clicked, setClicked] = React.useState(false)
  return (
    <div className='loginMainDiv'>
      <div className={clicked ? "container active" : "container"} id="container">
        <div className="form-container sign-up">
          <form>
            <h1 className='font-bold text-[40px]'>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <Input type="text" placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <button className="btn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1 className='font-bold text-[40px]'>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <a href="#" className="forgot-password">
              Forgot Your Password?
            </a>
            <button className="btn">Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className='font-bold text-[40px]'>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button
                className="border"
                onClick={() => setClicked(false)}
                id="login"
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className='font-bold text-[40px]'>New Here!</h1>
              <p>Register with your personal details to use all site features</p>
              <button
                className="border"
                onClick={() => setClicked(true)}
                id="register"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login