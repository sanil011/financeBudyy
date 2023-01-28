import React from 'react'
import Arrow from "../assests/arrow.svg"
import Play from "../assests/play.svg"
import Header from '../component/header'
import Man from "../assests/picWithMan.svg"
import Success from "../assests/success.svg";
import Invest from "../assests/investment.svg";
import Finance from "../assests/finance.svg";
import { Link } from 'react-router-dom'
export default function MainPage() {
    return (
        <>
            <Header />
            <div className="mx-20 my-28 flex">
                <div className="w-1/2 px-16">
                    <div>
                        <h1 className="text-7xl my-3 font-bold">Simplify Your </h1>
                        <h1 className="text-7xl my-3 font-bold"> Money </h1>
                        <h1 className="text-7xl my-3 font-bold">  Management.</h1>
                    </div>
                    <div className="text-lg text-gray-600 my-8">
                        Easily track your spending, create a budget and make financial decisions with your user friendly app.
                    </div>
                    <div className="flex">
                        <Link to="/box">
                        <button className='bg-[#7B62FF] flex gap-4 items-center align-middle text-white px-6 py-4 mr-8 rounded-md ' >
                            Chat Box <img src={Arrow} width={30} />
                        </button>
                        </Link>
                        <button className=' p-2 flex gap-4 items-center align-middle`'>
                            <img src={Play} width={30} /> Watch Demos
                        </button>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="mx-8 flex gap-2" style={{ height: "calc(100vh - 600px)" }}>
                        <img src={Man} alt="" style={{ objectFit: "contain", width: "50%", height: "100%" }} />
                        <img src={Success} alt="" style={{ objectFit: "contain", width: "50%", height: "100%" }} />
                    </div>
                    <div className="mx-8 flex gap-2" style={{ height: "calc(100vh - 600px)" }}>
                        <img src={Invest} alt="" style={{ objectFit: "contain", width: "50%", height: "100%" }} />
                        <img src={Finance} alt="" style={{ objectFit: "contain", width: "50%", height: "100%" }} />
                    </div>

                </div>
            </div>

        </>
    )
}
