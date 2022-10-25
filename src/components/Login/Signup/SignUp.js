import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext/AuthProvider";

const SignUp = () => {
    const [error, setError] = useState('')

    const {createUser, updateUser} = useContext(AuthContext);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value

        createUser(email, password)
        .then(res => {
            const user = res.user;
            updateProfile(name, photoUrl)
            setError('')
            form.reset()
            console.log(user)
        })
        .catch(e=> {
            setError(e.message)
        })
        

    }

    const updateProfile = (name, photoUrl) => {
        updateUser(name, photoUrl)
        .then(() => {
            setError('')
          })
          .catch((error) => {
            setError(error.message)
          });
    }


  return (
    <div>
        
      <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please signup First!</h1>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <p className="text-red-500"><small>{error}</small></p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
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
                  <small><Link to='/login'>Already Have An Account?</Link></small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
