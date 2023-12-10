import React from 'react'

const Login = () => {
  return (
    <div className="flex">
      <div className="login">
        <div className="L-text1 header_color">
          <h1>Login</h1>
        </div>
        <div className="content-flex">
          <form>
            <label className="L-text2 space">ID</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoCapitalize="none"
              className="form-box"
              autoCorrect="false"
            />
            <br />
            <label className="L-text2 space">Password</label>
            <br />
            <input
              className="form-box"
              type="password"
              id="password"
              placeholder="Enter your password"
              name=""
              autoCapitalize="none"
            />
          </form>
          <div className="space">
            <button className="button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
