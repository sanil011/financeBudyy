import React, { useContext, useEffect } from 'react'
import Logo from "../assests/dashboard.png";
import { Link } from "react-router-dom"
import { AuthContext } from '../context/AuthContext';
const Header = () => {
    const { user, logout,userDetails } = useContext(AuthContext);
    return (
        <div className='px-20 mb-[1rem] py-8 border-2 border-slate-200'>
            <div className='flex justify-between'>
                <div className='flex  justify-between'>
                    <div className='flex gap-x-4'>
                        <img width={40} src={Logo} alt="" />
                        <h1 style={{ color: "#7B62FF" }} className='font-semibold pr-4 border-r-2  text-2xl'>Finance Budyy </h1>
                    </div>
                    <div className='hidden xl:flex mx-12'>
                        <ul style={{ alignItems: "center" }} className='flex ml-4 gap-x-16'>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>About</li>
                            <li>Resource</li>
                        </ul>
                    </div>
                </div>
                <div>
                    {
                        JSON.stringify(userDetails)!="{}" ?
                            <div className='flex items-center'>
                                <div className='font-semibold text-xl mr-2'>{userDetails.name}</div>
                                <button onClick={logout} className='bg-[#7B62FF] text-white p-2 rounded-md'>
                                    Log Out
                                </button>
                            </div>
                            :
                            (
                                <>
                                    <Link to="/login" className='mx-12 p-2 ' >
                                        Login
                                    </Link>
                                    <Link to="/signup">
                                        <button className='bg-[#7B62FF] text-white p-2 rounded-md'>
                                            Sign up
                                        </button>
                                    </Link>
                                </>
                            )

                    }
                </div>
            </div>
        </div>
    )
}

export default Header