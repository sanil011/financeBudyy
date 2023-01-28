import React from 'react'
import Logo from "../assests/dashboard.png";
const Header = () => {
    return (
        <div className='flex mx-20 my-8 justify-between'>
            <div className='flex  justify-between'>
                <div className='flex gap-x-4'>
                    <img width={40} src={Logo} alt="" />
                    <h1 style={{ color: "#7B62FF" }} className='font-semibold pr-4 border-r-2  text-2xl'>Finance Budyy </h1>
                </div>
                <div className='mx-12'>
                    <ul className='flex ml-4 gap-x-16 items-center' style={{ alignItems: "center" }}>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Resource</li>
                    </ul>
                </div>
            </div>
            <div>
                <button className='mx-12 p-2 ' >
                    Login
                </button>
                <button className='bg-[#7B62FF] text-white p-2 rounded-md'>
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default Header