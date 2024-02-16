import React from 'react'

const Component1 = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login Page</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required />
            </div>
            <div className="remember-forgot">
                <a href="#">Forgot password</a>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Component1