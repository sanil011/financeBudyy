import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form"
import {AuthContext} from '../context/AuthContext';
import { db } from "../firebase"
import {addDoc,collection,query, where, getDocs } from "firebase/firestore";

function SignUp() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [error,setError]=useState("");
  const authent=useContext(AuthContext);
  const handleSignUp= async (data) => {
    const {name,email,password}=data;
    try{
        const d=query(collection(db,"users"),where("email","==",email));
        const querySnapshot=await getDocs(d);
        if(!querySnapshot.empty) 
        {
            setError("Email Id Already Registered!!!!");
            return;
        }
        await addDoc(collection(db,"users"),{
            name,
            email,
            password,
        })
        authent.signup(email,password);
    }
    catch(err)
    {
        setError("Client-Side Error occurred");
        console.log(err);
    }
  }
  return (
    <div>
      <div className="relative min-h-screen bg-white-200 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-violet-500 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-violet-500 bottom-6 right-6 transform rotate-12 hidden md:block"></div>
        <div className="transtion bg-white rounded-2xl hover:shadow-lg duration-300 p-6 max-w-sm">
          <form onSubmit={handleSubmit(handleSignUp)}>
              <div>
                <h1 className="text-3xl font-bold text-center mb-4">Create An Account</h1>
                <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide">Create an account to enjoy all the services without any ads for free!</p>
              </div>
              <div className="space-y-4">
                <div className=' text-red-600'>{error}</div>
                <input 
                  {...register('name',{required:"The Name Field is required"})}
                  type="text" 
                  placeholder="Name" 
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
                />
                <input 
                  {...register('email',{required:"The Email Field is required",pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }})}
                  type="text" 
                  placeholder="Email Address" 
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <input 
                  {...register('password',{required:"The password Field is required"})}
                  type="password" 
                  placeholder="Password" 
                  minLength={8}
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
              </div>
              <div className='flex flex-col p-5'>
                {errors.name && (
                    <span className='text-red-500'>{errors.name.message}</span>
                )}
                {errors.email && (
                    <span className='text-red-500'>{errors.email.message}</span>
                )}
                {errors.password && (
                    <span className='text-red-500'>{errors.password.message}</span>
                )}
              </div>
              <div className="text-center mt-6">
                <input type="submit" value="Create An Account"className="transtion duration-300 focus:bg-voilet-700 py-3 px-10 text-xl text-white bg-violet-500 rounded-2xl"/>
                <p className="mt-4 text-sm">Already Have An Account? <Link to="/login"className="underline">Log In</Link></p>
              </div>
          </form>
        </div>
        <div className="w-40 h-40 absolute bg-violet-500 rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-violet-500 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  )
}

export default SignUp