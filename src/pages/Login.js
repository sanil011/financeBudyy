import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const authent = useContext(AuthContext);
  const handleSignUp = async (data) => {
    try {
      const log = await authent.login(data.email, data.password)
      console.log(log)
    }
    catch (err) {
      console.log(err);
      setError("Client Side error occured, Try again later");
    }
  }
  return (
    <div>
      <div className="relative min-h-screen bg-white-200 flex justify-center items-center">
        <div className="transtion bg-white rounded-2xl hover:shadow-lg duration-300 p-6 max-w-sm">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div>
              <h1 className="text-3xl font-bold text-center mb-4">Log In</h1>
              <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">Log in to get exclusive Discounts and new collection</p>
            </div>
            <div className="space-y-4">
              <div className=' text-red-600'>{error}</div>

              <input
                {...register('email', {
                  required: "The Email Field is required", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                type="text"
                placeholder="Email Address"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
              <input
                {...register('password', { required: "The password Field is required" })}
                type="password"
                placeholder="Password"
                minLength={8}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            </div>
            <div className='flex flex-col p-3'>
              {errors.email && (
                <span className='text-red-500'>{errors.email.message}</span>
              )}
              {errors.password && (
                <span className='text-red-500'>{errors.password.message}</span>
              )}
            </div>
            <div className="text-center mt-3">
              <input type="submit" value="Log In" className="transtion duration-300 focus:bg-violet-700 py-3 px-10 text-xl text-white bg-violet-500 rounded-2xl" />
              <p className="mt-4 text-sm">Don't Have An Account? <Link to="/signup" className="underline">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;