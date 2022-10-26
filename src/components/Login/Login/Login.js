import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext/AuthProvider";

const Login = () => {
    const [error, setError] = useState('')
  const { login,githubSignIn, googleSignIn} = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        const user = res.user;
        setError('')
        form.reset();
        console.log(user);
      })
      .catch((e) => {
        setError(e.message);
      });
  };


  const handleGoogle = () => {
    googleSignIn()
    .then(res=> {
      const user = res.user
      setError('')
      console.log(user)
    })
    .catch(e=> {
      setError(e.message)
    })
  }
  const handleGithub = () => {
    githubSignIn()
    .then(res=> {
      const user = res.user
      setError('')
      console.log(user)
    })
    .catch(e=> {
      setError(e.message)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <p className="text-red-500"><small>{error}</small></p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    Forgot password?
                </p>
                </label>
              </div>
              <div className="form-control mt-2 mb-5">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="flex justify-center "> 
              <button  className="btn btn-outline mx-2  btn-info" onClick={handleGoogle}>Google</button>
              <button className="btn btn-outline mx-2" onClick={handleGithub}>Github</button>
              </div>
              <p className="text-blue-400 text-center">
                <small>
                  Create A <Link to="/signup">New Account</Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
